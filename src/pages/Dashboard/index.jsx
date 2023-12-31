import { useNavigate } from "react-router-dom";
import "./index.css";
import { useEffect } from "react";

const Dashboard = () => {
  const navigate = useNavigate();
  const isAuthenticated = JSON.parse(localStorage.getItem("authenticated"));
  // Crie um state para list iniciando com um array vazio.
  const [list, setlist] = ([]);
  // Crie um state para filteredList iniciando com um array vazio.
  const [filteredList, setFilteredList] = ([]);
  // Crie um state para currentMonth iniciando com a função getCurrentMonth.
  const [currentMonth, setCurrentMonth] = (getCurrentMonth);
  // Crie um state para income iniciando como 0.
  const [income, setIncome] = (0);
  // Crie um state para expense iniciando como 0.
  const [expense, setExpense] = (0);

  /*
      Crie um useEffect que tenha list, currentMonth e setFilteredList como dependência.
      Dentro dele crie uma const monthList que recebe o valor da função filterListByMonth(list, currentMonth)
      Use setFilteredList com o valor da monthList.
  */
 useEffect((list, currentMonth,setFilteredList) => {
  const monthList = filteredListByMonth(list,currentMonth)
    setFilteredList = (monthList);
 });

  /*
    Crie um useEffect que tenha filteredList como dependência.
    Crie uma let incomeCount que recebe 0.
    Crie uma let expenseCount que recebe 0.
    Crie um laço for (let i in filteredList) {}.
    Dentro do laço crie um if e verifique se categories[filteredList[i].category].expense.
    Se for verdadeiro incremente expenseCount com filteredList[i].value.
    Se for falso, incremente incomeCount com filteredList[i].value.
    Use o setIncome com o valor de incomeCount.
    Use o setExpense com o valor de expenseCount.
  */
 useEffect ((filteredList) => {
  let incomeCount = 0;
  let expenseCount = 0;
  for (let i in filteredList) {
    if (categories[filteredList[i].category].expense) {
      expenseCount = (filteredList[i].value)
    } else {
      incomeCount = (filteredList[i].value)
    }
  }
 });

  // Crie uma função handleMonthChange que recebe um newMonth. Dentro dela use o setCurrentMonth com o valor recebido na função
  function handleMonthChange(newMont) {
    setCurrentMonth (newMont);
  };
  /* Crie uma função handleAddItem que recebe um item. Dentro dela crie uma let newList que recebe uma cópia do array list.
      Em seguida dê push em newList com o valor de item.
      Em seguida use setList com o valor de newList.
  */
 function handleAddItem(item) {
  let newList = (newList);
  newList.push(item);
  setlist = newList;
 }

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.setItem("authenticated", "false");
    navigate("/login");
  };

  if (!isAuthenticated) {
    navigate("/login");
  }

  return (
    <div>
      <div className="header">
        <h1 className="headerText">Sistema Financeiro</h1>
        <button className="logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="body">
        {/* Insira a InfoArea e suas props */}
        <InfoArea />

        {/* Insira a InputArea e sua prop */}
        <InputArea />

        {/* Insira a TableArea e sua prop */}
        <tableArea onAdd={handleAddItem}/>
      </div>
    </div>
  );
};

export default Dashboard;
