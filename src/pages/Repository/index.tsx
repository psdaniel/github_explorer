import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Header, RepositoryInfo, Issues } from './styles';

import logoImg from '../../assets/logo.svg';

interface RepositoryParams {
    repository: string;
}

const Repository: React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>();

    return (
        <>
            <Header>
                <img src={logoImg} alt="Github Explorer" />
                <Link to="/">
                    <FiChevronLeft size={16}/>
                    Voltar
                </Link>
            </Header>

            <RepositoryInfo>
                <header>
                    <img src="https://camo.githubusercontent.com/e8ab4d776d1a3f635b04b0abcae9debbebd33a16/68747470733a2f2f73332d73612d656173742d312e616d617a6f6e6177732e636f6d2f726f636b6574736561742d63646e2f726f636b6574736561745f6c6f676f5f726f78612e706e67" alt="Rocketseat" />
                    <div>
                        <strong>rocketseat/unform</strong>
                        <p>descrição do repositório</p>
                    </div>
                </header>
                <ul>
                    <li>
                        <strong>1707</strong>
                        <span>Stars</span>
                    </li>
                    <li>
                        <strong>46</strong>
                        <span>Forks</span>
                    </li>
                    <li>
                        <strong>55</strong>
                        <span>Issues abertas</span>
                    </li>
                </ul>
            </RepositoryInfo>

            <Issues>
                <Link to="dasdasdas">
                        <div>
                            <strong>fasfasdasd</strong>
                            <p>asdasdasd</p>
                        </div>

                        <FiChevronRight size={20} />
                    </Link>))
            </Issues>
        </>
    )
}

export default Repository;
