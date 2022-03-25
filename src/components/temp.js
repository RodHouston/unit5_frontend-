<Add handleCreate={handleCreate} />
<div className="people">
  {people.map((person) => {
    return (
      <div className="person" key={person.id}>
        <h4>Name: {person.name}</h4>

        <Edit handleUpdate={handleUpdate} id={person.id} />
        <button onClick={handleDelete} value={person.id}>
          X
        </button>

      </div>
    )
  })}
  <AddHome handleCreate={handleCreateHome} />
  {homes.map((home) => {
    return (
      <div className="person" key={home.id}>
        <h4>Name: {home.owner}</h4>
        <h5>Street: {home.street}</h5>
        <h5>City: {home.city}</h5>
        <h5>State: {home.state}</h5>
        <h5>Type: {home.type}</h5>
      </div>
    )
  })}

<AddPhoto handleCreate={handleCreatePhoto} />
{photos.map((photo) => {
  return (
    <div className="person" key={photo.id}>
      <h4>Name: {photo.home}</h4>
      <img src={photo.photos}/>

    </div>
  )
})}
</div>
