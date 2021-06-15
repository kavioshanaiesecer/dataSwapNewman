// Run Newaman as a Library with Postman Collection
newman.run({
    collection: require('./Collections/RemoveCauseSelectedCollection.json'),
    reporters: 'cli',
    iterationData: './DataFile/DGRDataFileSample.csv'
}, (error) => {
    if (error) {
        throw error;
    }
    console.log('Remove Cause Selected Collection Run Complete!');
})
