export function compileDataToSave(state) {
  return {
    first_name: state.firstName,
    last_name: state.lastName,
    response: state.isGoing ? 'yes' : 'no',
    writtenResponse: state.allergyComments
  };
}
