import styled from "styled-components";

export const Container = styled.div`
    background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const TudoList = styled.div`
    background: white;
    padding: 30px 20px;
    border-radius: 5px;
`;

export const Input = styled.input`
    border: 2px solid rgba(209, 211, 212, 0.4);
    border-radius: 5px;
    height: 40px;
    margin-right: 10px;
    width: 340px;
    margin-right: 40px;
`;
export const Button = styled.button`
    background: #8052ec;
    border-radius: 5px;
    color: white;
    font-size: 17px;
    font-weight: 900;
    line-height: 2px;
    height: 40px;
    border: none;
    width: 130px;
`;
export const ListItens = styled.div`
    background: ${(props) => (props.isFinished ? "#E8FF8B" : "#E4E4E4")};
    border-radius: 5px;
    box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
    padding: 0 10px;
    width: 500px;

    li {
        list-style: none;
    }
`;
