import React from "react";

function BusinessHour(props){
    return(
        <div className="businnesHour">
            <div className="businnesHour-header">
                <h1 className="businnesHour-title">Horário</h1>
            </div>
            <div className="businnesHour-body">
                <div className="businnesHour-week">
                    <h2 className="businnesHour-week-days">Segunda-sexta</h2>
                    <h4 className="businnesHour-time">08:00 - 17:00</h4>
                </div>
                <div className="businnesHour-weekend">
                    <h2 className="businnesHour-week-days">Sábado</h2>
                    <h4 className="businnesHour-time">08:00 - 12:00</h4>
                </div>
            </div>
        </div>
    )
}

export default BusinessHour