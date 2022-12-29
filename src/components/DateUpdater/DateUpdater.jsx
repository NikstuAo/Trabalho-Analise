import './index.css';

function DateUpdater() {
    var date = "";

    var dayName = new Array("Domingo", "Segunda-feira", "Terça-feira", 
    "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado");
    
    var month = new Array("Janeiro", "Fevereiro", "Março", "Abril",     "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");

    setInterval(DateUpdater, 500);

    var now = new Date();

    date = dayName[now.getDay()] + ", " + now.getDate() + " de " + month[now.getMonth()] + " de " + now.getFullYear() + "<br>" + now.getHours() + ":" + now.getMinutes();

    document.getElementById("timer").innerHTML = date;

    return (
        <div id="timer">
            <p id='timer-now'></p>
        </div>
    );
}

export default DateUpdater; 