import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'

function Rating( {stars} ) {
    const full = <FontAwesomeIcon icon={solid("circle")} />;
    const empty = <FontAwesomeIcon icon={regular("circle")} />;
    let final = [];

    for (let i = 0; i < stars; i++) {
        final.push(full);
    }
    for (let i = stars; i < 5; i++) {
        final.push(empty);
    }

  return (
    <div className="rating">
      {final}
    </div>
  );
}

export default Rating;
