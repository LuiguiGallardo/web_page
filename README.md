# Luigui's Resume Website - Modular Structure

This website has been refactored to use a modular structure for better organization and maintainability.

## 📁 Project Structure

```
web_page/
├── index.html                 # Main HTML file (loads partials)
├── index-original.html        # Backup of original file
├── config.json               # Configuration file
├── partials/                 # Modular HTML sections
│   ├── navigation.html
│   ├── about.html
│   ├── experience.html
│   ├── research_portfolio.html
│   ├── apps.html
│   ├── education.html
│   ├── skills.html
│   ├── interests.html
│   └── awards.html
├── js/
│   ├── resume-loader.js      # Loads partials dynamically
│   └── scripts.js           # Original Bootstrap scripts
├── css/
│   └── styles.css           # Styles
└── assets/
    └── img/                 # Images
```

## 🔧 How It Works

1. **Main HTML (`index.html`)**: Contains the basic structure with containers for each section
2. **Partials**: Each section is stored in a separate HTML file in the `partials/` directory
3. **Dynamic Loading**: The `resume-loader.js` file loads each partial asynchronously
4. **Configuration**: `config.json` contains site metadata and section configuration

## ✨ Benefits

- **Modularity**: Each section is in its own file, making it easier to edit
- **Maintainability**: Changes to one section don't affect others
- **Scalability**: Easy to add new sections or reorder existing ones
- **Performance**: Sections load asynchronously for better performance
- **Organization**: Clear separation of concerns

## 🛠️ Making Changes

### Adding a New Section
1. Create a new HTML file in `partials/` directory
2. Update `config.json` to include the new section
3. Add the section to the navigation in `partials/navigation.html`
4. Add a container div in `index.html`

### Editing Content
- Simply edit the corresponding file in the `partials/` directory
- No need to search through a large HTML file

### Changing Site Configuration
- Update `config.json` with new metadata or section configuration

## 🚀 Development

To work with this modular structure:

1. **Local Development**: Use a local server to serve the files (required for fetch API)
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   ```

2. **Edit Sections**: Modify files in the `partials/` directory
3. **Test Changes**: Refresh the browser to see updates

## 📝 Notes

- The original file is backed up as `index-original.html`
- All CSS and JavaScript functionality remains the same
- The website maintains the same look and feel
- Bootstrap components and scroll spy functionality work as before

## 🔄 Reverting Changes

If you need to revert to the original structure:
```bash
cp index-original.html index.html
```

## 🎯 Future Enhancements

- Add a build process for production
- Implement caching for better performance
- Add error handling for failed partial loads
- Create a content management system
