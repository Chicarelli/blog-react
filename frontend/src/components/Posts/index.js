import React from 'react';
import * as S from './styles';
import {Link} from 'react-router-dom';


function Posts(){
    return (
        <S.Container>
            <h1>Título do POST</h1>
            <h3>Subtitulo do post, detalhando-o mais</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in urna ac mi interdum tincidunt ac at risus. Nulla tincidunt nec dui nec molestie. Mauris ut eros varius massa egestas pellentesque. Nulla facilisi. Nulla facilisi. In ultricies tincidunt sapien, id sodales risus bibendum vitae. Phasellus in tristique tellus, non efficitur turpis. Donec commodo mollis nulla, vel porttitor erat cursus eget. Donec feugiat nisl mauris, ut semper ante ornare ac. Vestibulum ac mauris quis mi malesuada aliquam ac eget metus. In nec mattis ipsum, eget scelerisque massa. Maecenas maximus sapien blandit, tincidunt justo vitae, tempus quam. In hac habitasse platea dictumst. Curabitur eu finibus tellus. Donec iaculis facilisis erat a pulvinar. Curabitur tempus tristique dui, vel bibendum nisi cursus eu.</p>
            <Link to="#">Ver mais</Link>
        </S.Container>
    );
}

export default Posts;