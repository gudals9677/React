import React from 'react';
import Aside from '../components/common/Aside';
import { useLocation } from 'react-router-dom';
import useCates from '../hooks/useCates';
import titleLabels from '../data/titleLabels.json';

const SubLayout = ({ children }) => {
    //cate1 = introduction, cate2= direction & hello
    const [cate1, cate2] = useCates();

    return (
        <div id="sub">
            <div>
                <img src={`../images/sub_top_${cate1}.png`} alt={titleLabels[cate1]} />
            </div>
            <section class={cate1}>
                <Aside />
                <article class={cate2}>
                    <nav>
                        <img src={`../images/sub_nav_tit_${cate1}_${cate2}.png`} alt={titleLabels[cate1]} />
                        <p>
                            HOME {'>'} {titleLabels[cate1]} {'>'} <em>{titleLabels[cate2]}</em>
                        </p>
                    </nav>
                    {/* 내용 시작 */}
                    {children}
                    {/* 내용 끝  */}
                </article>
            </section>
        </div>
    );
};

export default SubLayout;
