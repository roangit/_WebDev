import React from 'react';
import DataTable from 'react-data-table-component';


//styles
import '../pages/Tabelas.css';


//components
import MainHeader from '../components/MainHeader';


//hooks
import { useFetch } from '../hooks/useFetch'


//Aplicação
const url = "http://localhost:3000/tecnicos";

const Tabelas = () => {

  const { data: items, httpConfig, loading, error } = useFetch(url);

  const columns = [
     {
         name: 'Código',
         selector: row => row.id,
     },
     {
         name: 'Nome',
         selector: row => row.nome,
         sortable: true,
     },
 ];

 const dados = [
     {
         id: 1,
         title: 'Beetlejuice',
         year: '1988',
     },
     {
         id: 2,
         title: 'Ghostbusters',
         year: '1984',
     },
 ]
  
    return (
     <div className="container">
          <div className="Header">
          <MainHeader titulo='Tabelas'></MainHeader>  
          </div>
          <div className="VertMenu">
               {/* Botões*/}
               <div className="flex-container-botoes">
                    <div className="card-itens">
                         Pós Vendas
                    </div>
                    <div className="card-itens">
                         Produtos
                    </div>
                    <div className="card-itens">
                         Técnicos
                    </div>
                    <div className="card-itens">
                         Vendedores
                    </div>
               </div>
          </div>
          <div className="Main">
          <DataTable title="Movie List" columns={columns} data={dados} dense compact selectableRows pagination />
          </div>
          <div className="Footer"></div>
     </div>
  )
}

export default Tabelas

{/*
          <DataTable title="Movie List" columns={columns} data={dados} dense compact selectableRows pagination />

*/}