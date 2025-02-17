export function compileDataToSave(state) {
  return {
    first_name: state.firstName,
    email: state.email,
    last_name: state.lastName,
    response: state.isGoing ? 'yes' : 'no',
    writtenResponse: state.allergyComments,
  };
}
