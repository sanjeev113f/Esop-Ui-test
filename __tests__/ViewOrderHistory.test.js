import ViewOrderHistory from '../src/viewOrderHistory/viewOrderHistory.js'

//describe('ViewOrderHistory', ()=> {
//    it("it fetches order data" , async ()=> {
//        const viewOrderHistory = new ViewOrderHistory()
//        let response = viewOrderHistory.getTableData("sanjeev")
//        const mockResponse = [{
//                                 "error": [
//                                     "User not found"
//                                 ]
//                             }]
//
//        expect(response).toBe(mockResponse)
//    });
//});

describe('ViewOrderHistory', () => {
    it('fetches the user order data from the API', async () => {
        const mockResponse = [{ id: 1, name: 'Order 1' }, { id: 2, name: 'Order 2' }];
//        const mockJsonPromise = Promise.resolve(mockResponse);
        const mockFetchPromise = Promise.resolve({
            json: () => mockResponse
        });
        const mockFetch = jest.fn().mockImplementation(() => mockFetchPromise);
        fetch = mockFetch;

        const viewOrderHistory = new ViewOrderHistory();

        let response = await viewOrderHistory.getTableData("sanjeev");

        expect(response).toBe(mockResponse)
        expect(mockFetch).toHaveBeenCalledWith('http://localhost:8080/user/sanjeev/orderHistory');
        expect(global.fetch).toHaveBeenCalledTimes(1);
    });
});