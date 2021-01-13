import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export const CharacterList = styled.div`
  max-width: 600px;
  display: flex;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  width: 40%;
  height: 200px;
  margin-right: 24px;
  margin-bottom: 24px;

  border-radius: 4px;
  border: 1px solid #666;
  box-shadow: 2px 1px 1px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  object-fit: cover;
`;

export const Name = styled.h2`
  text-align: center;
  font-weight: bold;
`;
