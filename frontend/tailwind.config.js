/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundSize: {
        full: "100% 100%",
      },
      borderWidth: {
        gradient: "2px",
      },
      borderImageSource: {
        gradient:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.47) 0%, rgba(255, 255, 255, 0) 47.5%, rgba(255, 255, 255, 0.47) 100%)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".border-gradient": {
          "border-width": "2px",
          "border-image-source":
            "linear-gradient(180deg, rgba(255, 255, 255, 0.47) 0%, rgba(255, 255, 255, 0) 47.5%, rgba(255, 255, 255, 0.47) 100%)",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
