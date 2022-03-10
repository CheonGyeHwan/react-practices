import React from 'react'

function Content() {
//   return (
//     <p>Pure React(React API)로 컴포넌트 작성하기</p>
//   );

  return React.createElement('p', null, 'Pure React(React API)로 컴포넌트 작성하기');
}

export default Content