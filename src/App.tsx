import { lazy, useEffect, useState } from 'react';

import { Button } from './components/Button';
import { MovieCard } from './components/MovieCard';

import './styles/global.scss';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import { MoviesProvider } from './contexts/useMovies';




export function App() {


  return (
    <MoviesProvider>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar />
        <Content />
      </div>
    </MoviesProvider>
  )

}