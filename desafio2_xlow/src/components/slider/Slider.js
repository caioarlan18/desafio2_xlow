import { useState } from 'react';
import styles from './Slider.module.css';

export function Slider() {
    const arrayImagens = [
        {
            url: "https://imgs.search.brave.com/JBZrS97GzlHcV9waNlPibo4e_8jtg0Cjwqw7VxKT2No/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTA5/NjM2NTkwL3B0L2Zv/dG8vbWlzdHktcGFp/c2FnZW0tZGUtbW9u/dGFuaGEtZGUtdmVy/JUMzJUEzby1tb250/YW5oYXMuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPUJJd19K/bzNORGlQMUhxMFE3/UE9uT052Z2JfME40/VlJCdTgxSF9lUnJP/UFk9",
            alt: "imagem1",
            link: "#"
        },
        {
            url: "https://imgs.search.brave.com/PhMpZjS5z5FNlexkzAvaZxbXEe43BIosdqD7r7g3z34/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90b3MtcHJlbWl1/bS9vLXBpdG9yZXNj/by1wb3ItZG8tc29s/LXNvYnJlLXBhaXNh/Z2Vucy1lLWNhY2hv/ZWlyYXNfMTQ2Njcx/LTE0MDIzLmpwZz9z/aXplPTYyNiZleHQ9/anBn",
            alt: "imagem2",
            link: "#"
        },
        {
            url: "https://imgs.search.brave.com/yuWhBrgZhuvDNP31V02nWpwjzQffNxOm3LCcmU7Go3k/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/cXVlcm92aWFqYXJt/YWlzLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMC8wOC9s/YWdvLWxvdWlzZS5q/cGc",
            alt: "imagem3",
            link: "#"
        }
    ];

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
            <button className={styles.voltar} onClick={proximoBanner}>‹</button>
            <button className={styles.proximo} onClick={voltarBanner}>›</button>
            <div className={styles.dots}>
                {arrayImagens.map((_, index) => (
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
