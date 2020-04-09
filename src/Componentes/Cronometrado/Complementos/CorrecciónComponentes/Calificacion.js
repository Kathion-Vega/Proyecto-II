import React from 'react';   
    
    
    
    
    class Calificacion extends React.Component {
        constructor() {
        super();
        this.state = {
            expense: 0,
            income: 0,
            resultMonth: 0,
            resultYear: 0
        }
    }


    handleIncomeChange(e) {
        const newIncome = e.target.value;
        this.setState({
            income: newIncome,
            resultMonth: newIncome - this.state.expense
        });
    }

    handleExpenseChange(e) {
        const newExpense = e.target.value;
        this.setState({
            expense: newExpense,
            resultMonth: this.state.income - newExpense
        });
    }

    render() {
    return (
        <div class="calculator">
            <form>
                <div class="form-group">
                    <label>Monthly income</label>
                    <input id="income" type="number" onChange={this.handleIncomeChange.bind(this)} class="form-control" value={this.state.income} />
                </div>
                
                <div class="form-group">
                    <label>Monthly expense</label>
                    <input id="expense" type="number" onChange={this.handleExpenseChange.bind(this)} class="form-control" value={this.state.expense} />
                </div>	
            </form>

        Monthly cashflow: {this.state.resultMonth}
        Yearly cashflow: {this.state.resultMonth * 12}
            
        </div>
    );
    }
    }

export default Calificacion;