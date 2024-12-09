import { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState('');

  const styles = {
    container: {
      display: 'inline-block',
      marginTop: '50px',
      backgroundColor: '#262831',  
      maxHeight: '100vh',  
      padding: '40px 50px',
      color: '#fff',  
      borderRadius:"15px",
      boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
    },
    main:{
      display:"flex",
      flexDirection: 'column',
      alignItems: 'center',
    },
    screen: {
      width: '350px',
      height: '60px',
      border: '1px solid #444',  
      marginBottom: '20px',
      textAlign: 'right',
      padding: '15px',
      fontSize: '32px',
      backgroundColor: '#202128', 
      color: '#fff',  
    },
    buttons: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 70px)',
      gap: '30px',
      paddingLeft:"5px"
    },
    button: {
      padding: '20px',
      fontSize: '22px',
      fontWeight:"400",
      borderRadius: '5px',
      cursor: 'pointer',
      border: 'none',
      backgroundColor: '#2b2d35',  
      color: '#fff',  
      transition: 'background-color 0.3s ease',
      boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(255, 255, 255, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;',
      fontFamily: 'Digital-7',
    },
    buttonHover: {
      backgroundColor: '#555', 
    },
    buttonOperator: {
      padding: '20px',
      fontSize: '22px',
      borderRadius: '5px',
      cursor: 'pointer',
      border: 'none',
      backgroundColor: '#2b2d35', 
      color: '#d86363',  
      transition: 'background-color 0.3s ease',
      boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(255, 255, 255, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;',
    },
    buttonEqual: {
      padding: '20px 8.5rem',
      fontSize: '18px',
      borderRadius: '5px',
      cursor: 'pointer',
      border: 'none',
      backgroundColor: '#007bff',  
      color: '#fff',  
      transition: 'background-color 0.3s ease',
    },
    buttonClear: {
      padding: '20px',
      fontSize: '22px',
      fontWeight:"600",
      borderRadius: '5px',
      cursor: 'pointer',
      border: 'none',
      backgroundColor: '#2b2d35',  
      color: '#2e9cf3', 
      transition: 'background-color 0.3s ease',
      boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(255, 255, 255, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;',
    },
  };

  // Handle button clicks
  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  // Handle the calculation
  const handleCalculate = () => {
      setInput(eval(input).toString());
  };

  // Handle clearing the input
  const handleClear = () => {
    setInput('');
  };

  // Handle backspace
  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

  return (
    <div style={styles.main}>
      <h1 style={{color:"#fff"}}>CALCULATOR BY SAMRIDDHI SANPREET</h1>
        <div style={styles.container}>
      <div style={styles.screen}>{input}</div>
      <div style={styles.buttons}>
        <button
          style={styles.button}
          onClick={() => handleClick('1')}
        >
          1
        </button>
        <button
          style={styles.button}
          onClick={() => handleClick('2')}
        >
          2
        </button>
        <button
          style={styles.button}
          onClick={() => handleClick('3')}
        >
          3
        </button>
        <button
          style={styles.buttonOperator}
          onClick={() => handleClick('+')}
        >
          +
        </button>

        <button
          style={styles.button}
          onClick={() => handleClick('4')}
        >
          4
        </button>
        <button
          style={styles.button}
          onClick={() => handleClick('5')}
        >
          5
        </button>
        <button
          style={styles.button}
          onClick={() => handleClick('6')}
        >
          6
        </button>
        <button
          style={styles.buttonOperator}
          onClick={() => handleClick('-')}
        >
          -
        </button>

        <button
          style={styles.button}
          onClick={() => handleClick('7')}
        >
          7
        </button>
        <button
          style={styles.button}
          onClick={() => handleClick('8')}
        >
          8
        </button>
        <button
          style={styles.button}
          onClick={() => handleClick('9')}
        >
          9
        </button>
        <button
          style={styles.buttonOperator}
          onClick={() => handleClick('*')}
        >
          *
        </button>

        <button
          style={styles.button}
          onClick={() => handleClick('0')}
        >
          0
        </button>
        <button
          style={styles.buttonClear}
          onClick={handleClear}
        >
          C
        </button>
        <button
          style={styles.button}
          onClick={() => handleClick('.')}
        >
          .
        </button>
        <button
          style={styles.buttonOperator}
          onClick={() => handleClick('/')}
        >
          /
        </button>

        <button
          style={styles.button}
          onClick={handleBackspace}
        >
          ←
        </button>
        <button
          style={styles.buttonEqual}
          onClick={handleCalculate}
        >
          =
        </button>
      </div>
    </div>
    </div>
  );
}

export default Calculator;
