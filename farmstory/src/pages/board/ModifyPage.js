import React from 'react';
import DefalutLayout from '../../layouts/DefaultLayout';
import SubLayout from '../../layouts/SubLayout';
import { Link } from 'react-router-dom';

const ModifyPage = () => {
    return (
        <DefalutLayout>
            <SubLayout>
                <div id="board">
                    <section class="modify">
                        <form action="#">
                            <table border="0">
                                <caption>글수정</caption>
                                <tr>
                                    <th>제목</th>
                                    <td>
                                        <input type="text" name="title" placeholder="제목을 입력하세요." />
                                    </td>
                                </tr>
                                <tr>
                                    <th>내용</th>
                                    <td>
                                        <textarea name="content"></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <th>파일</th>
                                    <td>
                                        <input type="file" name="file" />
                                    </td>
                                </tr>
                            </table>

                            <div>
                                <Link to="./view.html" class="btn btnCancel">
                                    취소
                                </Link>
                                <input type="submit" value="작성완료" class="btn btnComplete" />
                            </div>
                        </form>
                    </section>
                </div>
            </SubLayout>
        </DefalutLayout>
    );
};

export default ModifyPage;
