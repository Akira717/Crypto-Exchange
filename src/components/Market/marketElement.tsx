import styled from 'styled-components';

export const Styles= styled.div`
  padding:1rem;
  min-height:84vh;
  align-items:center;
  table{
    width: 100%;
    background-color: rgb(255, 255, 255);
    box-shadow: rgb(235, 235, 235) 0px 0px 0px 1px;
    border-radius: 25px;
    border-style: hidden;
    tr{
      :last-child{
        td{
          border-bottom:0;
        }
      }
    }
    th{
      font-size: 0.9em;
      font-weight: 500;
      user-select: none;
      padding: 20px 10px;
      border-bottom: 3px solid rgb(242, 244, 255);
    }
  }
`;