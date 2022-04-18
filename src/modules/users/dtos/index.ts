interface IFindUserWithGamesDTO {
  user_id: string;
}

interface IFindUserByFullNameDTO {
  first_name: string;
  last_name: string;
}

interface ICreateUserDTO {
  first_name: string;
  last_name: string;
  password: string,
  email: string,
}

export { IFindUserWithGamesDTO, IFindUserByFullNameDTO, ICreateUserDTO };
