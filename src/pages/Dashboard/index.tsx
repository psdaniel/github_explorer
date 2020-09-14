import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt="Github Explorer" />
            <Title>Explore repositórios no Github</Title>

            <Form>
                <input placeholder="Digite aqui o nome do repositório" />
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <a href="teste">
                    <img src="https://avatars2.githubusercontent.com/u/67653200?s=460&u=cebdbd834f835b444ccfc339e972a3d5dfa93cf3&v=4"
                    alt="Daniel Souza"
                    />
                    <div>
                        <strong>rocketseat/unform</strong>
                        <p>Um repositório maneiro aí</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>
            </Repositories>
        </>
    );
};

export default Dashboard;
