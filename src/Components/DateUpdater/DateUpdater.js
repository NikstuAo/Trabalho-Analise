import './DateUpdater.css';

function DateUpdater() {
    var date = "";
    var dayName = new Array("domingo-feira", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado-feira")
    var month = new Array("janeiro", "fevereiro", "março", "abril", "Maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro")
    setInterval(DateUpdater, 500)
    var now = new Date();
    date = dayName[now.getDay()] + ", " + now.getDate() + " de " + month[now.getMonth()] + " de " + now.getFullYear() + "<br>" + now.getHours() + ":" + now.getMinutes();
    document.getElementById("timern").innerHTML = date;
    return (
        <div id="time">
            <p id="timern"></p>
        </div>
    );
}

export default DateUpdater;
