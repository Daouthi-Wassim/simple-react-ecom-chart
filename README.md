# Simple React Chart - Expense Tracker Application

> A React-based expense tracking application with interactive chart visualization, built using Vite for fast development.

## ✨ Features

### 📊 Interactive Bar Chart
- **Monthly expense visualization** using custom-built chart components
- **Dynamic bar heights** based on expense amounts per month
- **Shows spending patterns** across all 12 months of the year

### 💰 Expense Management
- **Add New Expenses**: Form with title, price, and date inputs
- **View Expense List**: Displays all expenses with formatted dates and prices
- **Sample Data**: Pre-loaded with 4 example expenses (TV, Voyage, Education, Phone)

### 🔍 Year-based Filtering
- **Filter expenses** by specific years or view "All" expenses
- **Automatically detects** available years from expense data
- **Chart and expense list** update dynamically based on selected filter

### 📅 Date Handling
- **Supports expenses** from 2 years in the past to 2 years in the future
- **Proper date formatting** (Month, Day, Year display)
- **Date validation** in the add expense form

## 🛠️ Technical Architecture

### Key Functionality:
- **State Management**: Uses React hooks (useState) for expense data and filtering
- **Data Flow**: Parent-to-child props passing and child-to-parent callbacks
- **Dynamic Calculations**: Automatic chart scaling based on maximum monthly expense
- **Form Validation**: Required fields and date range restrictions

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm/yarn
- Modern web browser

### Installation

1. **Clone the repository**
2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## 🛠️ Built With

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling and animations
- **JavaScript ES6+** - Modern JavaScript features
## 🎯 Usage
### Adding Expenses
1. Click "Add New Expense" button
2. Fill in the expense details:
   - **Title**: Description of the expense
   - **Amount**: Price in your currency
   - **Date**: When the expense occurred
3. Click "Add Expense" to save

### Viewing Charts
- The bar chart automatically updates when you add expenses
- Each bar represents total expenses for that month
- Bar height is proportional to the expense amount

### Filtering by Year
- Use the year dropdown to filter expenses
- Select "All" to view expenses from all years
- Both chart and expense list update automatically



<img width="900" height="872" alt="Capture d'écran 2025-08-13 070811" src="https://github.com/user-attachments/assets/4a3348bb-1aa6-4272-93d9-63de60290694" />
<img width="887" height="700" alt="Capture d’écran 2025-08-13 070906" src="https://github.com/user-attachments/assets/698fc40c-3d5b-4366-82cb-4701cb990f70" />
