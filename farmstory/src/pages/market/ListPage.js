import React from 'react';
import DefalutLayout from '../../layouts/DefaultLayout';
import SubLayout from '../../layouts/SubLayout';
import { Link } from 'react-router-dom';

const ListPage = () => {
    return (
        <DefalutLayout>
            <SubLayout>
                {/*내용시작*/}
                <p class="sort">
                    <Link to="#" class="on">
                        전체(10) |
                    </Link>
                    <Link to="#">과일 |</Link>
                    <Link to="#">야채 |</Link>
                    <Link to="#">곡류</Link>
                </p>
                <table border="0">
                    <thead>
                        <tr>
                            <th>이미지</th>
                            <th>종류</th>
                            <th>상품명</th>
                            <th>할인</th>
                            <th>포인트</th>
                            <th>판매가격</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <Link to="./view.html">
                                    <img src="../images/market_item1.jpg" class="thumbnail" alt="사과 500g" />
                                </Link>
                            </td>
                            <td class="type">과일</td>
                            <td class="title">
                                <Link to="#">사과 500g</Link>
                            </td>
                            <td class="discount">10%</td>
                            <td class="point">400P</td>
                            <td class="price">
                                <strong>3,600</strong>
                                <del>4,000</del>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Link to="./view.html">
                                    <img src="../images/market_item2.jpg" class="thumbnail" alt="사과 500g" />
                                </Link>
                            </td>
                            <td class="type">과일</td>
                            <td class="title">
                                <Link to="#">전남 완주 배 5kg</Link>
                            </td>
                            <td class="discount">10%</td>
                            <td class="point">400P</td>
                            <td class="price">
                                <strong>3,600</strong>
                                <del>4,000</del>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Link to="./view.html">
                                    <img src="../images/market_item3.jpg" class="thumbnail" alt="사과 500g" />
                                </Link>
                            </td>
                            <td class="type">과일</td>
                            <td class="title">
                                <Link to="#">방울 토마토</Link>
                            </td>
                            <td class="discount">10%</td>
                            <td class="point">400P</td>
                            <td class="price">
                                <strong>3,600</strong>
                                <del>4,000</del>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Link to="./view.html">
                                    <img src="../images/market_item6.jpg" class="thumbnail" alt="사과 500g" />
                                </Link>
                            </td>
                            <td class="type">곡류</td>
                            <td class="title">
                                <Link to="#">무농약 현미</Link>
                            </td>
                            <td class="discount">10%</td>
                            <td class="point">400P</td>
                            <td class="price">
                                <strong>3,600</strong>
                                <del>4,000</del>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Link to="./view.html">
                                    <img src="../images/market_item7.jpg" class="thumbnail" alt="사과 500g" />
                                </Link>
                            </td>
                            <td class="type">야채</td>
                            <td class="title">
                                <Link to="#">팜스토리 하루야채 샐러드</Link>
                            </td>
                            <td class="discount">10%</td>
                            <td class="point">400P</td>
                            <td class="price">
                                <strong>3,600</strong>
                                <del>4,000</del>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <p class="paging">
                    <Link to="#">{'<'}</Link>
                    <Link to="#" class="on">
                        [1]
                    </Link>
                    <Link to="#">[2]</Link>
                    <Link to="#">[3]</Link>
                    <Link to="#">[4]</Link>
                    <Link to="#">[5]</Link>
                    <Link to="#">{'>'}</Link>
                </p>
                {/*내용시작*/}
            </SubLayout>
        </DefalutLayout>
    );
};

export default ListPage;
