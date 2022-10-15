import styled from 'styled-components';

export const Container = styled.div`
    width: 40%;
    margin: 2em auto;
    background-color: #394049;
    border-radius: 5px;
    color: #FFF;
    
`
export const Header = styled.div`
    padding:0.5em;
    border-bottom: 1px solid #2c3035;
    text-align: center;  
    h1{
        margin: 0;
    } 
`
export const Form = styled.div`
    padding: 1em;
    margin: 0 2em;
    border-bottom: 1px solid #2c3035;
    h2{
        text-align: center;
        margin-top: 0;
    }
    form{
        input[type="submit"]{
        background-color: #333;
        color: #eee;
        display: block;
        width: 100%;
        border: 1px solid #222;
        border-radius: 5px;
        padding: 1em;
        cursor: pointer;
    }
    }
`
export const List = styled.div`
    padding: 0 1em 2em;
    margin: 1em 2em;

    h2{
        text-align: center;
        margin-top: 0;
        margin-bottom: 0;
    }

    p{
        text-align: center;
    }
`

export const FormControl = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;

    label{
        font-weight: bold;
        font-size: .7em;
        margin-bottom: .4em;
    }

    input{
        border: 1px solid #222;
        border-radius: 2px;
        background-color: #2c3035;
        padding: 0.5em;
        color: #dfdfdf;
    }
   
`

export const Todo = styled.div`
    border-bottom: 1px solid #444;
    padding: 1em 0;
    p{
        text-align: left;
        font-style: italic;
        font-size: 0.7em;
        margin-bottom: 1.5em;
    }
    svg{
        font-size: 1.2em;
        cursor: pointer;
        margin-right: 1em;
        transition: .5s;
        &:hover {
            color: rgb(240, 98, 146);
        }
    }
`

export const TodoDone = styled.div`
    margin-bottom: .5em;
    ${({done}) => done && `color: rgb(240, 98, 146);text-decoration: line-through;`}
 `
