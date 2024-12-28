# HRnet Application

HRnet is a modern web application designed to manage employee records efficiently. It provides functionalities for adding, viewing, and managing employee data through an intuitive and responsive interface.

---

## Features

### 1. **Create Employee**

- Input employee details, including personal information, address, and department.
- Form validation ensures all required fields are filled.
- Data is saved locally using Redux and local storage.

### 2. **Employee List**

- View a complete list of current employees.
- Employee data is retrieved from the local storage or an external API as fallback.
- Real-time updates to the employee list when new records are added.

### 3. **Local Storage Support**

- Employee data persists between sessions using local storage.

### 4. **Intuitive Design**

- Clean and responsive UI built using Material-UI components.

---

## Technologies Used

- **React**: For building the user interface.
- **Redux Toolkit**: For state management.
- **React Router**: For routing between pages.
- **Material-UI**: Pre-designed components for building the UI.
- **date-fns**: For date formatting.
- **Vite**: Fast and optimized development environment.
- **SASS**: For styling.

---

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- Node.js (v16 or higher)
- npm (v7 or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ssidikov/HRnet.git
   cd HRnet
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

### Building for Production

Create an optimized build:

```bash
npm run build
```

The build files will be generated in the `dist` folder.

### Deploying

The application is deployed using GitHub Pages. To deploy your own version:

```bash
npm run deploy
```

---

## Project Structure

### Components

- **Header**: Displays the application title and navigation link.
- **FormInput**: Reusable component for text inputs.
- **DateInput**: Component for date selection.
- **SelectInput**: Component for dropdowns.
- **AddressFieldset**: Groups address-related inputs.

### Pages

- **CreateEmployee**: Contains the form to add a new employee.
- **EmployeeList**: Displays the list of employees.

### Redux

- **slices/employees-slice.js**: Defines employee-related actions and reducers.
- **middleware/localStorageMiddleware.js**: Middleware to persist employee data in local storage.
- **selectors/index.js**: Contains selectors for formatting employee data.

---

## Usage

1. **Add a New Employee**

   - Navigate to the "Create Employee" page.
   - Fill out the form with the required employee information.
   - Click "Save" to add the employee to the database.

2. **View Employees**
   - Navigate to the "Employee List" page.
   - View the list of employees with their formatted details.
   - Search and filter functionality to the employee list

---

## API Integration

The initial employee data can be loaded from an external API as a fallback:

- URL: `https://raw.githubusercontent.com/ssidikov/HRnet/refs/heads/main/src/data/employees.json`

---

## Demo

The project is hosted on GitHub Pages: [HRnet Demo](https://ssidikov.github.io/HRnet/)
