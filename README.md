# File System Organizer

File System Manager is a Node.js-based command-line tool for organizing and managing files within a directory. It provides features such as directory tree visualization, file organization, and more.

## Features

- **Tree View:** Visualize the directory structure in a tree format.
- **Organize Files:** Categorize files based on their types into designated folders.
- **Customization:** Configure the types of files to be organized.

## Installation

```bash
npm install
```

## Usage
**Directory Tree View**
```bash
node main.js tree "directoryPath"
```
Replace **"directoryPath"** with the path of the directory you want to visualize.

## Organize Files
```bash
node main.js organise "directoryPath"
```
Replace *"directoryPath"* with the path of the directory you want to organize.

## Help
```bash
node main.js help
```
View a list of all available commands.

## Configuration
Edit the types object in the main.js file to customize the file types for organization.

```javascript
let types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docs', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg' , 'pkg', 'deb']
}
````

## License
This project is licensed under the *ISC License*.

## Issues
If you encounter any issues or have suggestions for improvement, feel free to open an issue.

## Acknowledgments
*Thanks to the Node.js and npm communities for their valuable packages.*
*Special thanks to [@jasbir96](https://github.com/Jasbir96) and OpenAI for language model support.*

```sql
Copy and paste this markdown content into your README file. Feel free to make any additional modifications or add more details as needed for your project.
```




