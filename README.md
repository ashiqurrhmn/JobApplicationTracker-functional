# Job Tracker

This is a simple job application tracker built with HTML, Tailwind CSS, and DaisyUI.

## Features

- Display available jobs with details (company, position, location, salary, etc.)
- Filter jobs by status (All, Interview, Rejected)
- Dashboard showing total, interview, and rejected counts
- Responsive layout using Tailwind utility classes

## Structure

```
index.html          # Main HTML file containing layout and job card examples
tailwind.config.js  # Tailwind configuration (if needed)
srcipt/
  script.js         # JavaScript to handle filtering and interactivity
```

## Usage

1. Open `index.html` in your browser.
2. Use the filter buttons at the top to toggle job status views.
3. Add or update jobs manually in HTML or implement dynamic functionality in `script.js`.

## Dependencies

- [Tailwind CSS](https://tailwindcss.com/) via CDN
- [DaisyUI](https://daisyui.com/) components
- Google Fonts (Geist, Outfit)
- Font Awesome for icons

## Notes

- The project currently uses static job cards defined in HTML; consider extending with dynamic data and local storage.
- Styling is managed through Tailwind utility classes.

## License

This project is open source and free to use.
