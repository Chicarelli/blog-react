import React from 'react';
import * as S from './styles';

function Categories({title, actived}){
    return(
            <S.Button actived={actived}>{title}</S.Button>
    )
}

export default Categories;