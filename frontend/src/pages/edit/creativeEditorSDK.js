import CreativeEditorSDK from "@cesdk/cesdk-js";
import { useEffect, useRef, useState } from "react";
import { uniqueId } from "lodash";
import generateMediaThumbnail from "browser-thumbnail-generator";

export default function CreativeEditorSDKComponent() {
  const cesdk_container = useRef(null);
  const [cesdk, setCesdk] = useState(null);
  const [renderVideoFileName, setRenderVideoFileName] = useState("");
  const [openVideoRenderModal, setOpenVideoRenderModal] = useState(false);
  const [openSceneModal, setOpenSceneModal] = useState(false);
  const [designMode, setDesignMode] = useState(true);
  const [saveSceneData, setSaveSceneData] = useState("");
  const [saveTemplateModal, setSaveTemplateModal] = useState(false);
  const [sceneName, setSceneName] = useState("");

  const renderedVideoFilePreview = useState({
    name: "",
    thumbnail: "",
    url: "",
    playing: false,
    type: "",
  });

  const localFileUpload = async (uploadfile) => {
    const type = uploadfile.type.split("/")[0];
    if (uploadHandlers[type]) {
      const { uploadedUrl, thumbnailUrl, source } = await uploadHandlers[type](
        uploadfile
      );

      await createUserUpload(uploadfile, uploadedUrl, thumbnailUrl);

      return createAssetsData(uploadfile, uploadedUrl, thumbnailUrl);
    }
  };

  const uploadHandlers = {
    video: async (uploadfile) => {
      const formData = new FormData();

      formData.append("video", uploadfile);

      const uploadedUrl = "url";
      const thumbnailUrl = await generateThumbnail(uploadfile, new FormData());

      return { uploadedUrl, thumbnailUrl, source: "ly.img.video.upload" };
    },
    audio: async (uploadfile) => {
      const formData = new FormData();

      formData.append("audio", uploadfile);

      const uploadedUrl = "url";
      const thumbnailUrl =
        "https://cdn-sandbox.rubi-ai.com/dev/images/3/image_66ad62f013856.png";

      return { uploadedUrl, thumbnailUrl, source: "ly.img.audio.upload" };
    },
    image: async (uploadfile) => {
      const formData = new FormData();

      formData.append("image", uploadfile);

      const uploadedUrl = "url";
      const thumbnailUrl = await generateThumbnail(uploadfile, new FormData());

      return { uploadedUrl, thumbnailUrl, source: "ly.img.image.upload" };
    },
  };

  const createUserUpload = async (uploadfile, uploadedUrl, thumbnailUrl) => {};

  const createAssetsData = (uploadfile, uploadedUrl, thumbnailUrl) => ({
    id: uniqueId(),
    label: { en: uploadfile.name },
    tags: { en: [uploadfile.name] },
    meta: {
      uri: uploadedUrl,
      thumbUri: thumbnailUrl,
      mimeType: uploadfile.type,
      width: 300,
      height: 300,
    },
  });

  const generateThumbnail = async (file, thumbnailData) => {
    const thumbnailImage = await generateMediaThumbnail({
      file,
      width: 300,
      height: 300,
      maintainAspectRatio: true,
    });

    thumbnailData.append("image", thumbnailImage.thumbnail, "thumbnail.jpg");

    return "url";
  };

  const config = {

      license: "J9vQdDUooBr60YytJIfnxICXkHt_DUXyjfb4HcjorzmyICVwkmpaRxNJtiACACg5",
      userId: "guides-user",
      role: "Creator",
      // baseURL: "https://cdn.img.ly/packages/imgly/cesdk-js/1.36.1/assets",
      ui: {
        scale: "normal",
        elements: {
          view: "advanced",
          panels: {
            inspector: { show: true, position: "left", floating: false },
            assetLibrary: { show: true, position: "left" },
            settings: { show: false },
          },
          navigation: {
            position: "top",
            action: {
              save: true,
              load: false,
              download: false,
              export: false,
              custom: [
                {
                  label: "Render",
                  iconName: "download",
                  callback: () => {
                    renderVideoFileName.value = "";
                    renderedVideoFilePreview.value = {
                      name: "",
                      thumbnail: "",
                      url: "",
                      playing: false,
                      type: "",
                    };
                    openVideoRenderModal.value = true;
                  },
                },
                {
                  label: "Open",
                  iconName: "upload",
                  callback: () => (openSceneModal.value = true),
                },
              ],
            },
          },
          libraries: {
            backgroundTrackLibraryEntries: [
              "ly.img.image",
              "ly.img.video",
              "ly.img.audio",
            ],
          },
        },
      },
      callbacks: {
        onUpload: async (uploadfile, onProgress) => {
          return await localFileUpload(uploadfile);
        },
        onSave: (scene) => {
          saveSceneData.value = scene;
          saveTemplateModal.value = true;
          sceneName.value = "";
          // onSaveTemplate(scene)
        },
        onLoad: "upload",
        onDownload: "download",
      },

  };

  useEffect(() => {
    if (!cesdk_container.current) return;

    let cleanedUp = false;
    let instance;
    CreativeEditorSDK.create(cesdk_container.current, config).then(
      async (_instance) => {
        instance = _instance;
        if (cleanedUp) {
          instance.dispose();
          return;
        }

        // Do something with the instance of CreativeEditor SDK, for example:
        // Populate the asset library with default / demo asset sources.
        await Promise.all([
          instance.addDefaultAssetSources(),
          instance.addDemoAssetSources({ sceneMode: "Video" }),
          instance.ui.setBackgroundTrackAssetLibraryEntries([
            "ly.img.image",
            "ly.img.video",
          ]), 
        ]);
        // await instance.createDesignScene();
        await instance.createVideoScene();

        setCesdk(instance);
      }
    );
    const cleanup = () => {
      cleanedUp = true;
      instance?.dispose();
      setCesdk(null);
    };
    return cleanup;
  }, [cesdk_container]);
  return (
    <div ref={cesdk_container} className="max-h-full h-full w-screen"></div>
  );
}
