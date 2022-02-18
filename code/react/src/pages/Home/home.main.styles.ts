import styled from "styled-components";
import colors from "../../global/colors";

interface IHomeColumnStyles {
  backgroundColor?: string;
}

export const Table = styled.div`
  background-color: ${colors.background};

  &:after {
    content: "";
    display: table;
    width: 100%;
  }
`;

export const Table2Columns = styled.div<IHomeColumnStyles>`
  width: 50%;
  float: left;
  color: ${colors.white};

  h1 {
    color: ${colors.white};
  }

  h3 {
    color: ${colors.white};
  }
`;

export const AddMargin = styled.div`
  margin: 1rem;
`;

export const MainCard = styled.form`
  width: 80%;
  /* TODO remove */
  min-height: 20rem;

  margin: auto;
  margin-top: 2rem;
  margin-bottom: 2rem;

  padding: 1rem;

  border-radius: 1rem;
  text-align: center;
  background-color: ${colors.white};
  box-shadow: 5px 5px 10px ${colors.support};
`;
