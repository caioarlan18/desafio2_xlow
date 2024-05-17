import { useState } from 'react';
import styles from './Slider.module.css';
import arrayImagens from '../arrayImage/arrayImage';
export function Slider() {

    const [indexAtual, setIndexAtual] = useState(0);

    function proximoBanner() {
        setIndexAtual((indexAnterior) => (indexAnterior === arrayImagens.length - 1 ? 0 : indexAnterior + 1));
    };

    function voltarBanner() {
        setIndexAtual((indexAnterior) => (indexAnterior === 0 ? arrayImagens.length - 1 : indexAnterior - 1));
    };

    const goToSlide = (index) => {
        setIndexAtual(index);
    };

    return (
        <div className={styles.slider}>
            {arrayImagens.map((image, index) => (
                <div className={index === indexAtual ? styles.slideActive : styles.slide} key={index}>
                    <a href={image.link}>
                        <img src={image.url} alt={image.alt} />
                    </a>
                </div>
            ))}
            <button className={styles.voltar} onClick={voltarBanner}>‹</button>
            <button className={styles.proximo} onClick={proximoBanner}>›</button>
            <div className={styles.dots}>
                {arrayImagens.map((a, index) => (
                    <span
                        key={index}
                        className={index === indexAtual ? styles.dotActive : styles.dot}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
}
