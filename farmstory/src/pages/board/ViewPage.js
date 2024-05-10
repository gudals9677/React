import React from 'react';
import DefalutLayout from '../../layouts/DefaultLayout';
import SubLayout from '../../layouts/SubLayout';
import { Link } from 'react-router-dom';

const View = () => {
    return (
        <DefalutLayout>
            <SubLayout>
                <div id="board">
                    <section class="view">
                        <table border="0">
                            <caption>글보기</caption>
                            <tr>
                                <th>제목</th>
                                <td>
                                    <input type="text" name="title" value="제목입니다." readonly />
                                </td>
                            </tr>
                            <tr>
                                <th>파일</th>
                                <td>
                                    <Link to="#">2020년 상반기 매출자료.xls</Link>&nbsp;<span>7</span>회 다운로드
                                </td>
                            </tr>
                            <tr>
                                <th>내용</th>
                                <td>
                                    <textarea name="content" readonly>
                                        내용 샘플입니다.
                                    </textarea>
                                </td>
                            </tr>
                        </table>

                        <div>
                            <Link to="#" class="btn btnRemove">
                                삭제
                            </Link>
                            <Link to="./modify.html" class="btn btnModify">
                                수정
                            </Link>
                            <Link to="./list.html" class="btn btnList">
                                목록
                            </Link>
                        </div>

                        <section class="commentList">
                            <h3>댓글목록</h3>

                            <article>
                                <span class="nick">길동이</span>
                                <span class="date">20-05-20</span>
                                <p class="content">댓글 샘플 입니다.</p>
                                <div>
                                    <Link to="#" class="remove">
                                        삭제
                                    </Link>
                                    <Link to="#" class="modify">
                                        수정
                                    </Link>
                                </div>
                            </article>

                            <p class="empty">등록된 댓글이 없습니다.</p>
                        </section>

                        <section class="commentForm">
                            <h3>댓글쓰기</h3>
                            <form action="#">
                                <textarea name="content">댓글내용 입력</textarea>
                                <div>
                                    <Link to="#" class="btn btnCancel">
                                        취소
                                    </Link>
                                    <input type="submit" value="작성완료" class="btn btnComplete" />
                                </div>
                            </form>
                        </section>
                    </section>
                </div>
            </SubLayout>
        </DefalutLayout>
    );
};

export default View;
