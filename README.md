Shota's Site (Web Dev Practice)

Files Included:
1. Component.jsx:

This file (`portfolio/component.jsx`) contains a React component that renders a comprehensive personal portfolio website. Key features include:

- Hero section with personal introduction and profile image
- Work experience timeline
- Education history
- Skills showcase, categorized into programming languages, frameworks, tools, and soft skills
- Certifications
- Personal achievements
- Hobbies and interests
- Footer with contact and navigation links

The component utilizes Tailwind CSS for styling, creating a responsive and visually appealing layout. It's designed to provide a complete overview of a professional's background, skills, and personal interests, suitable for job applications or personal branding.

2. layout.jsx:
`portfolio/layout.jsx` defines the root layout for the Next.js application. Key features:

- Imports and sets up the Inter font from Google Fonts
- Applies global styles and Tailwind CSS utilities
- Provides a basic HTML structure with language set to English
- Applies font variables and antialiasing to the body

This layout wraps all pages in the application, ensuring consistent styling and structure across the site.

3. globals.css:
`globals.css` contains the global styles for the project, utilizing Tailwind CSS. Key features:

- Imports Tailwind's base, components, and utilities styles
- Defines custom color scheme variables for light mode
- Sets up base styles for HTML elements
- Applies custom fonts to body text and headings

This file establishes the foundational styling for the entire application, ensuring consistent theming and typography across all components.

4. tailwind.config.js:
`tailwind.config.js` customizes the Tailwind CSS framework for the project. Key features:

- Specifies content paths for Tailwind to scan
- Extends the default theme with custom:
  - Font families for headings and body text
  - Color palette using CSS variables
  - Border radius values
  - Keyframes and animations for accordions
- Includes the `tailwindcss-animate` plugin for animation utilities

This configuration file allows for consistent, custom styling across the entire application, leveraging Tailwind's utility-first approach.
