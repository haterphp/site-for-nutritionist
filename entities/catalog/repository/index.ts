import { ICatalogEntity, ICatalogRepository } from "../interfaces";

export class CatalogRepository implements ICatalogRepository {
    public async getAll(category?: string): Promise<ICatalogEntity[]> {
        console.log(category)

        return Promise.resolve([
            this._createMockDataItem('First Product', "Description 1"),
            this._createMockDataItem('Second Product', "Description 2"),
            this._createMockDataItem('Third Product', "Description 3"),
            this._createMockDataItem('Fourth Product', "Description 4"),
            this._createMockDataItem('Fifth Product', "Description 5"),
        ])
    }

    private _createMockDataItem(title: string, description: string): ICatalogEntity {
        return {
            id: Math.random().toString(),
            price: Math.floor(Math.random() * (10000 - 1000) + 1000),
            title,
            description,
            url: "https://media.istockphoto.com/id/1457433817/photo/group-of-healthy-food-for-flexitarian-diet.webp?b=1&s=170667a&w=0&k=20&c=RKgGJW8aIINIPpisynZ2x6UWFiMZ0afmEN32gmbYvVI="
        }
    }
}