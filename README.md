Simple React Chart - Expense Tracker Application
This is a React-based expense tracking application with interactive chart visualization, built using Vite for fast development. Here's what the application offers:


📊 Interactive Bar Chart
Monthly expense visualization using custom-built chart components
Dynamic bar heights based on expense amounts per month
Shows spending patterns across all 12 months of the year

💰 Expense Management
Add New Expenses: Form with title, price, and date inputs
View Expense List: Displays all expenses with formatted dates and prices
Sample Data: Pre-loaded with 4 example expenses (TV, Voyage, Education, Phone)

🔍 Year-based Filtering
Filter expenses by specific years or view "All" expenses
Automatically detects available years from expense data
Chart and expense list update dynamically based on selected filter

📅 Date Handling
Supports expenses from 2 years in the past to 2 years in the future
Proper date formatting (Month, Day, Year display)
Date validation in the add expense form
Technical Architecture
Components Structure:
App.jsx - Main application component with state management
AddExpense.jsx - Toggleable form for adding new expenses
ExpensesContainer.jsx - Container managing filtering and display
Chart.jsx - Bar chart component aggregating monthly expenses
ChartItem.jsx - Individual bar component with dynamic height
ExpenseItem.jsx - Individual expense display component
Filter.jsx - Year selection dropdown component
Key Functionality:
State Management: Uses React hooks (useState) for expense data and filtering
Data Flow: Parent-to-child props passing and child-to-parent callbacks
Dynamic Calculations: Automatic chart scaling based on maximum monthly expense
Form Validation: Required fields and date range restrictions
<img width="900" height="872" alt="Capture d'écran 2025-08-13 070811" src="https://github.com/user-attachments/assets/4a3348bb-1aa6-4272-93d9-63de60290694" />
<img width="887" height="700" alt="Capture d’écran 2025-08-13 070906" src="https://github.com/user-attachments/assets/698fc40c-3d5b-4366-82cb-4701cb990f70" />
