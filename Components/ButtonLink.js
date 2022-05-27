import React from 'react'

function ButtonLink({ele}) {
    function isVisible (ele) {
  const { top, bottom } = ele.getBoundingClientRect();
  const vHeight = (window.innerHeight || document.documentElement.clientHeight);

  return (
    (top > 0 || bottom > 0) &&
    top < vHeight
  );
}
  return (
    <div>ButtonLink</div>
  )
}

export default ButtonLink