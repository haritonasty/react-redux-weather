/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import { colorTheme } from '../../utils/style';
import SearchCitiesContainer from '../SearchCitiesContainer';
import WeatherContainer from '../WeatherContainer';
import CitiesList from '../CitiesList';

export const StyledHeader = styled(Header)``;

export const SideBar = styled.aside``;

export const Main = styled.main``;

export const Wrapper = styled.div`
  display: grid;
  grid-template-areas: 'sidebar header' 'sidebar main';
  height: 90vh;
  max-height: 600px;
  width: 85vw;
  max-width: 700px;
  min-width: 280px;
  border-radius: 20px;
  overflow: hidden;
  grid-template-rows: auto 1fr;
  background: linear-gradient(150deg, #f3548a 20%, #f78167 100%);
  box-shadow: -9px 13px 84px 0 rgba(92, 91, 94, 0.5);
  grid-template-columns: 60% 40%;
  @media (max-width: 700px) {
    grid-template-areas: 'header header' 'sidebar sidebar' 'main main';
    grid-template-rows: 80px 85px 1fr;
  }

  ${StyledHeader} {
    grid-area: header;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    @media (max-width: 700px) {
      padding-top: 0;
    }
  }

  ${SideBar} {
    grid-area: sidebar;
    padding: 20px 50px 40px 50px;
    background: ${colorTheme.base};
    color: ${colorTheme.baseInvert};
    display: flex;
    flex-direction: column;
    align-items: baseline;
    @media (max-width: 700px) {
      padding: 0 20px 0 20px;
      justify-content: center;
      align-items: center;
    }
  }

  ${Main} {
    grid-area: main;
    padding: 20px 20px 40px 20px;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: flex-end;
  }
`;

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <SideBar>
          <SearchCitiesContainer />
          <CitiesList />
        </SideBar>
        <StyledHeader />
        <Main>
          <WeatherContainer />
        </Main>
      </Wrapper>
    );
  }
}
