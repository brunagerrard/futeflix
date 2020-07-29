import React, {useState} from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);
  
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#e42a2a',
  }
  const [values, setValues] = useState(valoresIniciais);

  function setValue(campoInput,valor) {
    setValues({
      ...values,
      [campoInput]: valor,
    })
  }

  function handleChange(input) {
    setValue(input.target.getAttribute('name'), input.target.value);
  }

    return (
      <PageDefault>

          <form onSubmit={function handleSubmit(cadastrar) {
            cadastrar.preventDefault();
            setCategorias([
              ...categorias,
              values
            ]);

            setValues(valoresIniciais)
          }}>
              <h1>Cadastrar categoria — {values.nome}</h1>

              <FormField 
                label='Nome da Categoria:'
                type='text'
                name='nome'
                value={values.nome}
                onChange={handleChange}
              />
            
              <FormField 
                label='Cor:'
                type='color'
                name='cor'
                value={values.cor}
                onChange={handleChange}
              />

              <FormField
                label='Descrição:'
                type='text' 
                name='descricao'
                value={values.descricao} 
                onChange={handleChange}
              />

            <button>
              Cadastrar
            </button>
          </form>

          <ul>
            {categorias.map((categoria, indice) => {
              return (
                <li key={`${categoria}${indice}`}>
                  {categoria.nome}
                </li>
              )
            })}
          </ul>

        <Link to='/'>
          Home
        </Link>
      </PageDefault>
    )
  }

export default CadastroCategoria;