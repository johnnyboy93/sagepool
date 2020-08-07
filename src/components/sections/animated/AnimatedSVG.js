// import React from 'react';
// import '../../../assets/scss/animatedsvg/_orbital-resonance.scss'
// import animatedX from '../../../assets/images/orbitalresonance.svg'

// const OrbitalResonance = () => {
//     const rotateDeg = 1 // Make this number smaller for more detail - no lower than .5
//     const ganymedeOrbits = 1 // Real value: 1 - Play with these three for fun!
//     const europaOrbits = 2 // Real value: 2
//     const ioOrbits = 4 // Real value: 4
//     const resonance1 = ganymedeOrbits / europaOrbits
//     const resonance2 = ganymedeOrbits / ioOrbits
//     const centre = 325
//     const ganymedeDist = centre - parseInt(ganymede.getAttribute("cy"), 10)
//     const europaDist = centre - parseInt(europa.getAttribute("cy"), 10)
//     const ioDist = centre - parseInt(io.getAttribute("cy"), 10);
//     let i = 0
//     let orbitals = setInterval(function () {
//         i -= rotateDeg; // Makes rotation CCW
//         ganymede.setAttribute("transform", "rotate(" + i + " " + centre + " " + centre + ")");
//         europa.setAttribute("transform", "rotate(" + i / resonance1 + " " + centre + " " + centre + ")");
//         io.setAttribute("transform", "rotate(" + i / resonance2 + " " + centre + " " + centre + ")");
//         let ganymedeX = Math.cos((i * Math.PI / 180)) * ganymedeDist + centre,
//             ganymedeY = Math.sin((i * Math.PI / 180)) * ganymedeDist + centre,
//             europaX = Math.cos((i / resonance1) * Math.PI / 180) * europaDist + centre,
//             europaY = Math.sin((i / resonance1) * Math.PI / 180) * europaDist + centre,
//             ioX = Math.cos((i / resonance2) * Math.PI / 180) * ioDist + centre,
//             ioY = Math.sin((i / resonance2) * Math.PI / 180) * ioDist + centre,
//             shape = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
//         shape.setAttribute('points', ganymedeX + ',' + ganymedeY + ' ' + europaX + ',' + europaY + ' ' + ioX + ',' + ioY);
//         shape.setAttribute('stroke', 'hsla(' + i + ', 50%, 50%, 0.5)');
//         shape.setAttribute('fill', 'none');
//         shape.setAttribute('stroke-width', '0.5px');
//         lineGroup.appendChild(shape);
//         if (-i == (360 * ganymedeOrbits)) {
//             clearInterval(orbitals);
//         }
//     }, 30);

//     return (
//         <object type="image/svg+xml" data={animatedX}>svg-animation</object>
//     )
// }

// export default OrbitalResonance