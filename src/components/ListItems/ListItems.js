import ListItem from "../ListItem/ListItem";

function ListItems({ data, searchText, onCountryClick }) {
  return (
    <ul>
      {data.map((country) => {
        if (!searchText) {
          return (
            <ListItem
              key={country.countryCode}
              country={country}
              onCountryClick={onCountryClick}
            />
          );
        } else {
          if (country.name.toLowerCase().includes(searchText.toLowerCase())) {
            return (
              <ListItem
                key={country.countryCode}
                country={country}
                onCountryClick={onCountryClick}
              />
            );
          } else {
            return;
          }
        }
      })}
    </ul>
  );
}

export default ListItems;
