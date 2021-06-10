import React, { useState, useEffect } from 'react';

function CharacteristicItem({ char, per }) {
  return (
    <div>
      <span>{char}</span>
      <div>{`${per}%`}</div>
    </div>
  );
}

export default CharacteristicItem;
