function App() {
  const me = {
    name: "Eduardo",
    module: "modulo 3",
    age: 20,
  };

  const alertName = () => {
    alert(me.name);
  };

  return (
    <>
      <li>
        <h3>
          {me.name} - {me.module}
        </h3>
        <p>Tenho {me.age} anos</p>
        <button onClick={alertName}>Who's me?</button>
      </li>
    </>
  );
}

export default App;
