import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import '../styles/myCss.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { error } from 'util';
import 'bootstrap/dist/css/bootstrap.css';
import ReactBootstrap from 'react-bootstrap';
import { Component } from 'react-bootstrap';
import { Button, ButtonToolbar,Modal } from 'react-bootstrap';
import FadeIn from 'react-fade-in';



class EmployeeRow extends React.Component {

    constructor(props) {
        super(props);
    }

    handleClick(e, props) {
        const ID = e.props.item.ID;
        // jQuery.ajax({
        //     url: "api/Employee/UpdateEmployee",
        //     contentType: 'application/json',
        //     data: JSON.stringify({
        //         ID: ID
        //     }),
        //     cache: false,
        //     type: "POST",
        //     success: (data) => {
        //         debugger;
        //         props.propsEdit(data);

        //     }
        // });

        let params=new URLSearchParams();
        params.append('ID',ID);
        axios.post('http://localhost:51751/api/Employee/UpdateEmployee', params)
        .then((response) => {
          props.propsEdit(response.data);
        })
        .catch((error) =>console.log(error));


    }
    handleDelete(e, props) {
        debugger;
        const ID = e.props.item.ID;
        
        let params = new URLSearchParams();
        params.append('ID', ID );
        
        axios.post('http://localhost:51751/api/Employee/DeleteEmployee', params)
        .then((response) => {
          props.propsUpdate(response.data);
        })
        .catch( (error) =>   console.log(error) ) ;

     
    }

    render() {
        let inputStyle3 = { marginRight: '5px', color: 'white', backgroundColor: '#428bca' };
        return (<tr>
                <td>{this.props.item.ID}</td>
                <td>{this.props.item.FirstName}</td>
                <td>{this.props.item.LastName}</td>
                <td>{this.props.item.Gender}</td>
                <td>{this.props.item.Salary}</td>
                <td>
                <button style={inputStyle3} className="btn-primary" id={this.props.item.ID} onClick={(e)=>this.handleClick(this,this.props)}> EDIT</button>
                <button style={inputStyle3} className="btn-primary" id={this.props.item.ID} onClick={(e) =>this.handleDelete(this, this.props)}> Delete</button>

                </td>
   
        </tr>
    );
    }
}


class Trigger extends React.Component {
    constructor(props) {
      super(props);
  
      this.handleHide = this.handleHide.bind(this);
      this.handleSave = this.handleSave.bind(this);
      this.handleClearSave=this.handleClearSave.bind(this);
      this.state = {
        save: false,
        show: false
      };
    }

    componentWillReceiveProps(nextProps)
    {
        debugger;
        if((nextProps.flag===0 || nextProps.flag===1)&& nextProps.AddEdit===true){
        this.setState({ show: true});
        
        }
        
    }

    handleSave() {
        debugger
        this.setState({ save: true });
      }

    handleClearSave()
    {
        this.setState({
            save: false,
            show: false
        });
    }
  
    handleHide() {
        debugger;
      this.setState({ show: false });
    }
    render() {
        debugger;
      return (
        <div className="modal-container" style={{ height: 200}}>
          <Modal
            show={this.state.show}
            onHide={this.handleHide}
            container={this}
            animation={false}
            backdrop={false}
            aria-labelledby="contained-modal-title"
            className="trans"
          >
            <Modal.Header>
              <Modal.Title id="contained-modal-title">
                Add New Employee
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-body">
            <NewRow propSave={this.handleSave}{...this.state} 
            propClearSave={this.handleClearSave} 
            propsUpdate={this.props.propsUpdate}{...this.props} 
            dataPassed={this.state.data} 
            propsEdit={this.props.propsEdit} propsEdited={this.props.propsEdited}/>
            </Modal.Body>
            <Modal.Footer>
               <button className="input-lg" onClick={()=>this.setState({save:true})}>Save</button>
              <button className="input-lg" onClick={this.handleHide}>Close</button>
            </Modal.Footer>
          </Modal>
        </div>  
      );
    }
  }
  



  class TxtSearch extends React.Component {
    constructor(props) {
        super(props);
        this.Add = this.Add.bind(this);
    }

    Add() {
        //var ReactDOM = require('react-dom');
        this.props.propsEdit();
        
      //ReactDOM.findDOMNode(this.refs.modal).modal;
        //ReactDOM.findDOMNode(this.refs.modal);
    }

    search(Selected,InputValue,list,props) {
        debugger
        let val;
        if (InputValue !== '') {
            switch (Selected) {
                case 'FirstName':
                    val = list.Array.filter((item) => {
                        if (item.FirstName.toLowerCase().includes(InputValue.toLowerCase())) {
                            return item;
                        }
                    });
                    break;
                case 'LastName':
                    val = list.Array.filter((item) => {
                        if (item.LastName.toLowerCase().includes(InputValue.toLowerCase())) {
                            return item;
                        }
                    });
                    break;
                case 'Salary':
                    val = list.Array.filter((item) => {
                        if (item.Salary === (Number(InputValue))) {
                            return item;
                        }
                    });
                    break;
                case 'EmployeeID':
                    val = list.Array.filter((item) => {
                        if (item.ID === Number(InputValue)) {
                            return item;
                        }
                    });
                    break;
            }
        }
        else {
            list.propsUpdate(props.Array);
        }
        list.propsUpdate(val);
    }

    clear(props) {
        // $.ajax({
        //     url: "api/Employee/GetEmployeeList",
        //     contentType: 'application/json',
        //     cache: false,
        //     type: "GET",
        //     success: (data) => {
        //         debugger;
        //         props.propsUpdate(data);
        //     }
        // });
        axios.get('http://localhost:51751/api/Employee/GetEmployeeList')
        .then(function(response)
        {
            props.propsUpdate(response.data);
        })
        .catch(error)
        {
            console.log(error);
        }

    }

    componentWillReceiveProps(nextProps) {
    
        // if(nextProps.data.ID)
        // {
        //     $(ReactDOM.findDOMNode(this.refs.modal)).modal();
        // }
    }

    render() {

        let Selected = "EmployeeID";
        let InputValue;
        const list = this.props;
        let val = [];
        const rows = [];
        let inputStyle = { marginRight: '10px', color: 'white', backgroundColor: '#428bca', border:'2px', borderColor: '#357ebd'};
        let inputStyle1 = { marginRight: '10px', color: 'white', backgroundColor: '#428bca', borderColor: '#357ebd' };
        let inputStyle2 = { marginRight: '10px', color: 'white', backgroundColor: '#428bca', borderColor: '#357ebd', float: 'Right' };

        return (<div>
    <input type="text" style={inputStyle} className="input-lg"
           placeholder="SearchText"
           onChange={(e) => { InputValue = e.target.value }} />
           
    <select style={inputStyle} className="input-lg" onChange={(e) => { Selected = e.target.value } }>
    
      <option>EmployeeID</option>
      <option>FirstName</option>
      <option>LastName</option>
      <option>Salary</option>
      
    </select>
    
    <button style={inputStyle1} className="input-lg" onClick={() => this.search(Selected,InputValue,list,this.props)}>Search</button>
    <button style={inputStyle1} className="input-lg" onClick={() =>this.clear(this.props) }>Clear</button>
    <button style={inputStyle2} className="input-lg" onClick={() => this.Add()}>ADD</button>
    </div>);
    }
}


export class NewRow extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onFirstNameChange = this.onFirstNameChange.bind(this);
        this.onLastNameChange = this.onLastNameChange.bind(this);
        this.onGenderChange = this.onGenderChange.bind(this);
        this.onSalaryChange = this.onSalaryChange.bind(this);
        this.updateFun = this.updateFun.bind(this);
        this.updatingDataFromDB=this.updatingDataFromDB.bind(this);
       
        this.state = {
            ID:(this.props.data && this.props.flag===0)?this.props.data.ID:'',
            FirstName: (this.props.data && this.props.flag===0)?this.props.data.FirstName:'',
            LastName: (this.props.data && this.props.flag===0)?this.props.data.LastName:'',
            Gender:(this.props.data && this.props.flag===0)?this.props.data.Gender: '',
            Salary:(this.props.data && this.props.flag===0)?this.props.data.Salary: 0,
            Save:(this.props.save)?true:false
        };
    }

    handleSubmit(e) {
        debugger;
        const FN = this.state.FirstName;//this.refs.FN.value;
        const LN = this.state.LastName;//this.refs.LN.value;
        const Salary =this.state.Salary; //this.refs.Salary.value;
         const Gender =  this.refs.Gender.value;
        const ID = this.state.ID;//this.refs.ID.value;
        let that=this;
        
        if (ID === undefined || ID === "") {
            // $.ajax({
            //     url: "api/Employee/AddEmployee",
            //     contentType: 'application/json',
            //     data: JSON.stringify({
            //         FirstName: FN, LastName: LN, Salary: Salary, Gender: Gender
            //     }),
            //     cache: false,
            //     type: "POST",
            //     success: (data) => {
            //         props.propsUpdate(data);
            //     }
            // });
            let params=new URLSearchParams();
            params.append('FirstName', FN);
            params.append('LastName', LN);
            params.append('Salary', Salary);
            params.append('Gender', Gender);
        
        
            axios.post('http://localhost:51751/api/Employee/AddEmployee', params)
            .then(function (response) {
                  debugger;
                  that.updatingDataFromDB(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

        }
        else {
            // $.ajax({
            //     url: "api/Employee/EditEmployee",
            //     contentType: 'application/json',
            //     data: JSON.stringify({
            //         ID: ID, FirstName: FN, LastName: LN, Salary: Salary, Gender: Gender
            //     }),
            //     cache: false,
            //     type: "POST",
            //     success: (data) => {
            //         props.propsUpdate(data);
            //     }
            // });
            let params=new URLSearchParams();
            params.append('ID',ID);
            params.append('FirstName', FN);
            params.append('LastName', LN);
            params.append('Salary', Salary);
            params.append('Gender', Gender);
            axios.post('http://localhost:51751/api/Employee/EditEmployee', params)
            .then(function (response) {
                debugger;
                that.updatingDataFromDB(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
            
        }
       
    }

    updatingDataFromDB(data)
    {
        debugger;
        this.props.propClearSave();
        this.props.propsUpdate(data);
        

    }

    
    onFirstNameChange(e) {
        debugger;
        this.setState({ FirstName: e.target.value });
    }
    onLastNameChange(e) {
        debugger;
        this.setState({ LastName: e.target.value });
    }
    onGenderChange(e) {
        this.setState({ Gender: e.target.value });
    }
    onSalaryChange(e) {
        this.setState({ Salary: e.target.value });
    }

    updateFun(props) {
        debugger;
        if (props.flag == 0) {
            this.setState({
                FirstName: this.props.data.FirstName,
                LastName: this.props.data.LastName,
                Gender: this.props.data.Gender,
                Salary: this.props.data.Salary,
                Save:this.props.save

            })
        }
        else {
            this.setState({
                FirstName: '',
                LastName: '',
                Gender: '',
                Salary:'',
                Save:props.save

            })
        }
        // this.props.propClearSave();
       if(props.save)
       {
            this.handleSubmit(this);
       }
        return true;
    }

    
    componentWillReceiveProps(nextProps) {
        debugger;
        if (this.props !== nextProps ) {
            let Update = this.updateFun(nextProps);
        }
       
    }
   
    render() {
        let inputStyle = { padding: '12px' };
        let selected = "Male";
        //var Modal = require('react-bootstrap-modal');
        return (<div>
                          
                          <input type="hidden" ref="ID" value={this.state.ID} />
                          
                          <div className="input-group input-group-lg" style={inputStyle }>
                              <input type="text" 
                              className="form-control col-md-8" 
                              value={this.state.FirstName}
                              onChange={this.onFirstNameChange}
                              placeholder="FirstName" ref="FN" />
                          </div>
                          
                          <div className="input-group input-group-lg" style={inputStyle }>
                              <input type="text" 
                              className="form-control col-md-8" 
                              value={this.state.LastName} 
                              placeholder="LastName" 
                              onChange={this.onLastNameChange} ref="LN" />
                          </div>

                          <div className="input-group input-group-lg" style={inputStyle }>
                              <select className="form-control col-md-8"
                               value={this.state.Gender} 
                               onChange={this.onGenderChange} 
                               ref="Gender">
                                  <option value="Male">Male</option>
                                  <option value="Female">Female</option>
                              </select>
                          </div>
                          
                          <div className="input-group input-group-lg" style={inputStyle }>
                              <input type="text" 
                              className="form-control col-md-8" 
                              value={this.state.Salary} 
                              placeholder="Salary" 
                              onChange={this.onSalaryChange} ref="Salary" />
                          </div>
        </div>)
    }

}


export class EmployeeTable extends React.Component {
    constructor(props) {
        super(props);
        this.propsUpdate = this.propsUpdate.bind(this);
        this.propsEdit = this.propsEdit.bind(this);
        this.state = {
            result: [],
            data: {},
            flag: -1,
            AddEdit:false
        };
    }

    propsUpdate(data) {
        debugger
        var inputStyle = { padding: '12px' };
        if (data !== undefined && data.length > 0) {
            this.setState({ 
                result: data,
                AddEdit:false
             });
        }
    }
    propsEdit(data) {
        debugger;
        if (data) {
            this.setState({
                data: data,
                flag: 0,
                AddEdit:true
            });
           
        }
        else {
            this.setState({
                flag: 1,
                AddEdit:true
            });
            
        }
    }

    componentWillMount() {
        // $.ajax({
        //     url: this.props.url,
        //     contentType: 'application/json',
        //     cache: false,
        //     type: "GET",
        //     success: (data) => {
        //         debugger;
        //         return (this.setState({ result: data }));
        //     }
        // });
        let that=this;
        axios.get('http://localhost:51751/api/Employee/GetEmployeeList')
        .then(function (res) {
            console.log(res);
            return (that.setState({ result: res.data }));
        })
        .catch(function (error) {
            console.log(error);
        });
  

        //function (data) {
        //    //debugger;
        //    this.setState({ result: data });
        //}
        //var xhr = new XMLHttpRequest();
        //xhr.open('get', this.props.url, true);
        //xhr.onload = function () {
        //    var response = JSON.parse(xhr.responseText);

        //    this.setState({ result: response });

        //}.bind(this);
        //xhr.send();
    }

    render() {
        const rows = [];
        let that = this;
        let inputStyle3 = { marginTop: '20px', color: 'black', border: '#8e8e93', backgroundColor: '#f5f5f5' };
        this.state.result.forEach(function (item) {
            rows.push(<EmployeeRow key={item.ID} item={item} propsUpdate={that.propsUpdate} propsEdit={that.propsEdit } />);
        });

        return (<div className="Scrll">
            <TxtSearch Array={this.state.result} propsUpdate={that.propsUpdate} {...this.state} propsEdit={that.propsEdit} />

                <table className="table" style={inputStyle3} id="myTable">
           <thead>
               <tr>
                  <th>EmployeeID</th>
                  <th>FirstName</th>
                  <th>LastName</th>
                  <th>Gender</th>
                  <th>Salary</th>
                   <th style={{ textAlign: "left" }}>Action</th>
               </tr>
           </thead>

            <tbody>
                {rows}
            </tbody>

                </table>
            <Trigger propsUpdate={that.propsUpdate} {...this.state} dataPassed={this.state.data} propsEdit={that.propsEdit} propsEdited={that.propsEdited} />
        </div>);
    }

}
 ReactDOM.render(<EmployeeTable url="http://localhost:51751/api/Employee/GetEmployeeList" />,
// ReactDOM.render(<Trigger />,     
document.getElementById('app'));
