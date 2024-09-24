"use client";

import { Tuple, Tree, useTree } from 'tuple-ui';

// import classes from './layout.module.css';
import { useEffect } from 'react';

const pages = {
    'lorem':    { id: 10, name: 'lorem'     , component: () => <> lorem </> },
    'world':    { id: 11, name: 'world'     , component: () => <> world </> },
    'ford':     { id: 12, name: 'ford'      , component: () => <> ford </> },
    'jeep':     { id: 13, name: 'jeep'      , component: () => <> jeep </> },
    'chrysler': { id: 14, name: 'chrysler'  , component: () => <> chrysler </> },
    'ferrari':  { id: 15, name: 'ferrari'   , component: () => <> ferrari </> },
    'gm':       { id: 16, name: 'gm'        , component: () => <> gm </> },
    'honda':    { id: 17, name: 'honda'     , component: () => <> honda </> },
    'ford2':     { id: 51, name: 'ford'      , component: () => <> ford </> },
    'jeep2':     { id: 52, name: 'jeep'      , component: () => <> jeep </> },
    'chrysler2': { id: 53, name: 'chrysler'  , component: () => <> chrysler </> },
    'ferrari2':  { id: 54, name: 'ferrari'   , component: () => <> ferrari </> },
    'gm2':       { id: 55, name: 'gm'        , component: () => <> gm </> },
    'honda2':    { id: 56, name: 'honda'     , component: () => <> honda </> },
    'ford3':     { id: 61, name: 'ford'      , component: () => <> ford </> },
    'jeep3':     { id: 62, name: 'jeep'      , component: () => <> jeep </> },
    'chrysler3': { id: 63, name: 'chrysler'  , component: () => <> chrysler </> },
    'ferrari3':  { id: 64, name: 'ferrari'   , component: () => <> ferrari </> },
    'gm3':       { id: 65, name: 'gm'        , component: () => <> gm </> },
    'honda3':    { id: 66, name: 'honda'     , component: () => <> honda </> },
    'ford4':     { id: 71, name: 'ford'      , component: () => <> ford </> },
    'jeep4':     { id: 72, name: 'jeep'      , component: () => <> jeep </> },
    'chrysler4': { id: 73, name: 'chrysler'  , component: () => <> chrysler </> },
    'ferrari4':  { id: 74, name: 'ferrari'   , component: () => <> ferrari </> },
    'gm4':       { id: 75, name: 'gm'        , component: () => <> gm </> },
    'honda4':    { id: 76, name: 'honda'     , component: () => <> honda </> },
    'carpe':    { id: 18, name: 'carpe'     , component: () => <> carpe </> },
    'diem':     { id: 19, name: 'diem'      , component: () => <> diem </> },
    'monkey':   { id: 20, name: 'monkey'    , component: () => <> monkey </> },
    'pox':      { id: 21, name: 'pox'       , component: () => <> pox </> },
    'apple':    { id: 22, name: 'apple'     , component: () => <> apple </> },
    'banana':   { id: 23, name: 'banana'    , component: () => <> banana </> },
    'carrot':   { id: 24, name: 'carrot'    , component: () => <> carrot </> },
    'brocoli':  { id: 25, name: 'brocoli'   , component: () => <> brocoli </> },
    'tomato':   { id: 26, name: 'tomato'    , component: () => <> tomato </> },
    'orange':   { id: 27, name: 'orange'    , component: () => <> orange </> },
};

const tree = [
    { id: 9, pageId: 'editor' },
    { id: 10, pageId: 'lorem' },
    { id: 11, pageId: 'world' },
    { id: 1, label: 'yolo', branches: [
        { id: 12, pageId: 'carpe' },
        { id: 13, pageId: 'diem' },
        { id: 2, label: 'hello again', branches: [
            { id: 3, label: 'cars', branches: [
                { id: 15, pageId: 'ford' },
                { id: 16, pageId: 'jeep' },
                { id: 17, pageId: 'chrysler' },
                { id: 18, pageId: 'ferrari' } ,
                { id: 19, pageId: 'gm' },
                { id: 20, pageId: 'honda' },
                { id: 4, label: 'cars', branches: [
                    { id: 21, pageId: 'ford2' },
                    { id: 22, pageId: 'jeep2' },
                    { id: 23, pageId: 'chrysler2' },
                    { id: 24, pageId: 'ferrari2' },
                    { id: 25, pageId: 'gm2' },
                    { id: 26, pageId: 'honda2' },
                    { id: 5, label: 'cars', branches: [
                        { id: 27, pageId: 'ford3' },
                        { id: 28, pageId: 'jeep3' },
                        { id: 29, pageId: 'chrysler3' },
                        { id: 30, pageId: 'ferrari3' },
                        { id: 31, pageId: 'gm3' },
                        { id: 32, pageId: 'honda3' },
                        { id: 5, label: 'cars', branches: [
                            { id: 33, pageId: 'ford4' },
                            { id: 34, pageId: 'jeep4' },
                            { id: 35, pageId: 'chrysler4' },
                            { id: 36, pageId: 'ferrari4' },
                            { id: 37, pageId: 'gm4' },
                            { id: 38, pageId: 'honda4' },
                        ]},
                    ]},
                ]},
                { id: 6, label: 'fruits', branches: [
                    { id: 41, pageId: 'apple' },
                    { id: 42, pageId: 'banana' },
                    { id: 43, pageId: 'carrot' },
                    { id: 44, pageId: 'brocoli' },
                    { id: 45, pageId: 'tomato' },
                    { id: 46, pageId: 'orange' },
                ]},
            ]},
        ]},
    ]},
    { id: 39, pageId: 'monkey' },
    { id: 40, pageId: 'pox' },
];


const Layout = () => {
    console.log('hi')
    const {
        tree: _tree,
        pages: _pages,
        renameBranch,
        renameLeaf,
        deleteBranch,
        deleteLeaf,
        addBranch,
        addLeaf,
    } = useTree(tree, pages);

    useEffect(() => {
        console.log('tree', _tree);
    }, [_tree])

    useEffect(() => {
        console.log('pages', _pages);
    }, [_pages])

    const _addLeaf = (path: number[], position: number, branchName: string) => {
        addLeaf(
            path,
            position,
            branchName,
            () => (<div>{branchName}</div>),
            {}
        );
    };

    return (
        <div style={{
            // display: 'flex',
            // justifyContent: 'center',
            // alignItems: 'center',
            height: '100%',
        }}>
            <Tuple 
                pages={ _pages }
            >
                <Tree tree={_tree}
                    onBranchRename  ={ renameBranch }
                    onLeafRename    ={ renameLeaf }
                    onBranchDelete  ={ deleteBranch }
                    onLeafDelete    ={ deleteLeaf }
                    onBranchAdd     ={ addBranch }
                    onLeafAdd       ={ _addLeaf }
                    onBranchDrop    ={ () => {} }
                    onLeafDrop      ={ () => {} }
                />
            </Tuple>
        </div>
    );
}

export default Layout;
