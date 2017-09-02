export class Movie {
  constructor(
    public id?: string,
    public name?: string,
    public director?: string,
    public imageUrl?: string,
    public duration?: number,
    public releaseDate?: Date,
    public genres?: string[]
  ) {}
}