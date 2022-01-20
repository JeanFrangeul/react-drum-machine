import React from 'react';
import styled from 'styled-components';

const About = () => {
    return (
        <Wrapper>
            <h2>Instructions</h2>

            <section>
                <p>Jouez les sons en :</p>
                <p>-cliquant sur les différents bouttons</p>
                <p>-tapant au clavier "A Z E R"</p>
                <div>
                    Chargez de nouveaux sons en cliquant sur "<span>♫</span>"
                </div>
            </section>

            <section>
                <p className="small" >Application réalisée en ReactJs</p>
                <p className="small" >Entrainement pour le diplôme de développeur d'application web.</p>
            </section>

            <section>by Ratus</section>

        </Wrapper>
    )
};

export default About;

const Wrapper = styled.div`
    margin-top: 200px;
    text-align: center;
    width: 100%;
    & h2 {
        font-size: 24px;
        margin-bottom: 60px;
    }
    & section {
        margin: 45px 0;
    }
    & p:first-child {
        margin-bottom: 12px;
    }
    & p.small {
        font-size: 12px;
        margin: 10px 0;
    }
    & span {
        font-size: 26px;
    }
`;