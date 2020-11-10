function _typeof (obj) {
  '@babel/helpers - typeof'

  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function (obj) {
      return typeof obj
    }
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj
    }
  }

  return _typeof(obj)
}

function _classCallCheck (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function')
  }
}

function _defineProperties (target, props) {
  for (let i = 0; i < props.length; i++) {
    const descriptor = props[i]
    descriptor.enumerable = descriptor.enumerable || false
    descriptor.configurable = true
    if ('value' in descriptor) descriptor.writable = true
    Object.defineProperty(target, descriptor.key, descriptor)
  }
}

function _createClass (Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps)
  if (staticProps) _defineProperties(Constructor, staticProps)
  return Constructor
}

function _inherits (subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function')
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  })
  if (superClass) _setPrototypeOf(subClass, superClass)
}

function _getPrototypeOf (o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf (o) {
    return o.__proto__ || Object.getPrototypeOf(o)
  }
  return _getPrototypeOf(o)
}

function _setPrototypeOf (o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf (o, p) {
    o.__proto__ = p
    return o
  }

  return _setPrototypeOf(o, p)
}

function _isNativeReflectConstruct () {
  if (typeof Reflect === 'undefined' || !Reflect.construct) return false
  if (Reflect.construct.sham) return false
  if (typeof Proxy === 'function') return true

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}))
    return true
  } catch (e) {
    return false
  }
}

function _assertThisInitialized (self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
  }

  return self
}

function _possibleConstructorReturn (self, call) {
  if (call && (typeof call === 'object' || typeof call === 'function')) {
    return call
  }

  return _assertThisInitialized(self)
}

function _createSuper (Derived) {
  const hasNativeReflectConstruct = _isNativeReflectConstruct()

  return function _createSuperInternal () {
    const Super = _getPrototypeOf(Derived)
    let result

    if (hasNativeReflectConstruct) {
      const NewTarget = _getPrototypeOf(this).constructor

      result = Reflect.construct(Super, arguments, NewTarget)
    } else {
      result = Super.apply(this, arguments)
    }

    return _possibleConstructorReturn(this, result)
  }
}

function _slicedToArray (arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest()
}

function _toArray (arr) {
  return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest()
}

function _toConsumableArray (arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread()
}

function _arrayWithoutHoles (arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr)
}

function _arrayWithHoles (arr) {
  if (Array.isArray(arr)) return arr
}

function _iterableToArray (iter) {
  if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(iter)) return Array.from(iter)
}

function _iterableToArrayLimit (arr, i) {
  if (typeof Symbol === 'undefined' || !(Symbol.iterator in Object(arr))) return
  const _arr = []
  let _n = true
  let _d = false
  let _e

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value)

      if (i && _arr.length === i) break
    }
  } catch (err) {
    _d = true
    _e = err
  } finally {
    try {
      if (!_n && _i.return != null) _i.return()
    } finally {
      if (_d) throw _e
    }
  }

  return _arr
}

function _unsupportedIterableToArray (o, minLen) {
  if (!o) return
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen)
  let n = Object.prototype.toString.call(o).slice(8, -1)
  if (n === 'Object' && o.constructor) n = o.constructor.name
  if (n === 'Map' || n === 'Set') return Array.from(o)
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen)
}

function _arrayLikeToArray (arr, len) {
  if (len == null || len > arr.length) len = arr.length

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]

  return arr2
}

function _nonIterableSpread () {
  throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')
}

function _nonIterableRest () {
  throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')
}

// Returns the Node key reformatted as a capitalized, space-separated label
function nodeLabel (source) {
  const tokens = []
  let token = ''
  let type = ''

  for (let i = 0; i < source.length; i++) {
    const c = source[i]

    if (c === '.' || c === ' ' || c === '_' || c === '-') {
      // separator
      if (token.length) tokens.push(token)
      token = ''
      type = ''
    } else if (c >= '0' && c <= '9') {
      if (type === 'string') {
        if (token.length) tokens.push(token)
        token = ''
      }

      type = 'number'
      token += c
    } else if (c >= 'A' && c <= 'Z') {
      if (type === 'number' || token.length) {
        // previously in number or another string
        if (token.length) tokens.push(token) // store the previous number or string

        token = '' // start a new string
      }

      type = 'string'
      token += c
    } else if (c >= 'a' && c <= 'z') {
      if (type === 'number') {
        if (token.length) tokens.push(token)
        token = ''
      }

      type = 'string'
      token += token.length ? c : c.toUpperCase()
    }
  }

  if (token.length) tokens.push(token)
  return tokens.join(' ')
}

const Node = /* #__PURE__ */(function () {
  function Node (nodeIdx, nodeKey, variantRef) {
    _classCallCheck(this, Node)

    this.consumers = [] // aray of references to consumer Nodes

    this.depth = 0
    this.idx = nodeIdx // index into the Dna.updater[] array, used only by DagDna.nodeConfigs()

    this.isEnabled = true
    this.label = null
    this.key = nodeKey
    this.order = 0
    this.producers = [] // array of references to producer Nodes

    this.update = {
      able: false,
      // is updateable (i.e., is NOT Config derived)
      method: null,
      args: [] // array of method args (mix of references to Nodes or literals)

    }
    this.value = variantRef.defaultValue()
    this.variant = variantRef
  }

  _createClass(Node, [{
    key: 'displayLabel',
    value: function displayLabel () {
      return this.label || nodeLabel(this.key)
    }
  }, {
    key: 'displayLine',
    value: function displayLine () {
      return this.displayLabel() + ' ' + this.displayString()
    }
    /**
     * Return Node's value as a (possibly decorated) string
     * For Quantity, the string is the current value after:
     * - conversion into the current display units-of-measure,
     * - truncation of digits to current display precision, decimals, or exponentiation, and
     * - the current units-of-measure string appended.
     */

  }, {
    key: 'displayString',
    value: function displayString () {
      return this.variant.displayString(this.value)
    }
    /**
     * Return Node's value as a (possibly decorated) string
     * For Quantity, the string is the current value after:
     * - conversion into the current display units-of-measure, and
     * - truncation of digits to current display precision, decimals, or exponentiation.
     */

  }, {
    key: 'displayValue',
    value: function displayValue () {
      return this.variant.displayValue(this.value)
    } // Throws an Error() if `value` is a NOT valid for this Node's Variant class.
    // variant.isValid() returns object { pass: <bool>, value: <testValue>, fails: <failedTestName> }

  }, {
    key: 'ensureValidValue',
    value: function ensureValidValue (value) {
      const result = this.variant.isValid(value)

      if (!result.pass) {
        throw new Error('Node '.concat(this.key, ' value ').concat(value, ' fails test ').concat(result.fails))
      }

      return value
    } // Returns TRUE if `value` is a valid value for this Node's Variant class.

  }, {
    key: 'isValidValue',
    value: function isValidValue (value) {
      return this.variant.isValid(value).pass
    } // Set's this Node's value AFTER ensuring it is valid.

  }, {
    key: 'setValue',
    value: function setValue (value) {
      this.value = this.ensureValidValue(value)
      return this.value
    }
    /**
     * Updates the Node's value by calling its updater method and storing the result.
     *
     * NOTE: This is the most heavily used function in the entire system.
     * DO NOT use this.update.args.map() to iterate over method args,
     * as it increases execution time time by 50% !!!
     */

  }, {
    key: 'updateValue',
    value: function updateValue () {
      const args = []

      for (let i = 0; i < this.update.args.length; i++) {
        const parm = this.update.args[i]
        args.push(parm instanceof Node ? parm.value : parm)
      }

      this.value = this.update.method.apply(this, args)
    }
  }])

  return Node
}())

/**
   * Returns an array of result run indices that satisfy the input node-value pair specs
   * @param {*} inputValues An array of input node => value specifications
   */
function resultIndices (dag, inputNodeValuePairs) {
  // Get all the run indices where the first Node has the spec value
  const _inputNodeValuePairs$ = inputNodeValuePairs.shift()
  const _inputNodeValuePairs$2 = _slicedToArray(_inputNodeValuePairs$, 2)
  const node = _inputNodeValuePairs$2[0]
  const specVal = _inputNodeValuePairs$2[1]

  const nodeRuns = dag.results.map.get(node) // Which of the all the runs have this Node's spec value?

  const remaining = []
  nodeRuns.forEach(function (runVal, runIdx) {
    if (specVal === runVal) remaining.push(runIdx)
  })
  return inputNodeValuePairs.length && remaining.length ? resultIndicesRecursive(dag, inputNodeValuePairs, remaining) : remaining
}

function resultIndicesRecursive (dag, inputNodeValuePairs, possible) {
  const _inputNodeValuePairs$3 = inputNodeValuePairs.shift()
  const _inputNodeValuePairs$4 = _slicedToArray(_inputNodeValuePairs$3, 2)
  const node = _inputNodeValuePairs$4[0]
  const specVal = _inputNodeValuePairs$4[1]

  const nodeRuns = dag.results.map.get(node) // Which of the remaining runs also have this Node's spec value?

  const remaining = []
  possible.forEach(function (runIdx) {
    if (specVal === nodeRuns[runIdx]) remaining.push(runIdx)
  })
  return inputNodeValuePairs.length && remaining.length ? resultIndicesRecursive(dag, inputNodeValuePairs, remaining) : remaining
} // Returns the value of referenced Node

function resultValue (dag, node, runIdx) {
  if (!dag.results.map.has(node)) throw new Error('Node '.concat(node.key, ' is not in the run results'))
  return dag.results.map.get(node)[runIdx]
} // Stores current value of all input and selected Nodes in the Results Map
// This is the default Dag.storeFunction

function storeValues (dag) {
  dag.results.map.forEach(function (runs, node) {
    return runs.push(node.value)
  })
}

/**
 * The DagTopology file provides functions to:
 * - select updater methods
 * - determine Node producers and consumers, and
 * - determine Node depth and topological order.
 * @copyright 2020 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
 * @version 0.1.0
 * coverage-20200506
 */
function reset (dag) {
  dag.node.forEach(function (node) {
    node.consumers = [] // array of Node references

    node.depth = 0
    node.order = 0
    node.producers = [] // array of Node references
  }) // Determine Node updater method, args, producers, and consumers for the current configuration

  const _loop = function _loop (nodeIdx) {
    const node = dag.node[nodeIdx]
    const idx = selectNodeUpdaterIdx(dag, nodeIdx)

    const _dag$dna$updater$node = _toArray(dag.dna.updater[nodeIdx][idx][1])
    const methodIdx = _dag$dna$updater$node[0]
    const parms = _dag$dna$updater$node.slice(1)

    node.update.method = dag.dna.method[methodIdx]
    node.update.args = []
    parms.forEach(function (parm) {
      if (parm[0] === 0) {
        // if parm is a Node reference
        const producer = dag.node[parm[1]]
        node.update.args.push(producer)
        node.producers.push(producer)
        producer.consumers.push(node)
      } else {
        // else parm is a literal value
        node.update.args.push(dag.literal(parm[1]))
      }
    })
  }

  for (let nodeIdx = 0; nodeIdx < dag.node.length; nodeIdx++) {
    _loop(nodeIdx)
  }

  resetNodeDepths(dag)
}
/**
   * A reset() helper function that returns a topologically sorted array of the Dag Nodes, but with:
   *  - *input* Nodes deferred to the greatest depth allowed by their consumers (out edges)
   *  - *fixed* Nodes are run first and just once
   * Its OK to determine depths of disabled Nodes
   */

function resetNodeDepths (dag) {
  // Step 1 - determine depth of the consumer chain for each Node
  let maxDepth = 0
  dag.node.forEach(function (node) {
    const visited = new Set([node.key])
    maxDepth = Math.max(maxDepth, resetNodeDepth(node, visited))
  }) // Step 2 - ensure input Nodes are processed after all other Nodes at the same depth
  // - non-input Nodes have an odd numbered level = 2 * depth - 1
  // - input Nodes have an even numbered level = 2 * depth

  dag.sorted = []
  dag.node.forEach(function (node) {
    node.depth = dag.nodeIsInput(node) ? 2 * node.depth - 1 : 2 * node.depth
    dag.sorted.push(node)
  }) // Step 3 - topologically sort the Node array

  dag.sorted.sort(function (node1, node2) {
    return node2.depth - node1.depth
  })
  dag.sorted.forEach(function (node, order) {
    node.order = order
  })
}
/**
 * A resetNodeDepths() helper function (and therefore, also a reset() helper function)
 * that returns the Node's depth, calculating it first, if necessary
 * (Its OK to determine depths of disabled Nodes)
 * @param {Node} node
 * @param {Set<Node>} visited A Set of keys to Nodes that have been traversed from the start of the chain
 */

function resetNodeDepth (node, visited) {
  // If this Node doesn't yet have a depth, derive it
  if (!node.depth) {
    let maxDepth = 0
    node.consumers.forEach(function (consumer) {
      if (visited.has(consumer.key)) {
        visited.add(consumer.key)
        throw new Error('Cyclical dependency detected:\n'.concat(Array.from(visited).join(' required by ->\n')))
      }

      visited.add(consumer.key)
      const depth = resetNodeDepth(consumer, visited)
      visited.delete(consumer.key)
      maxDepth = Math.max(depth, maxDepth)
    })
    node.depth = maxDepth + 1
  }

  return node.depth
} // Returns the current appropriate updater index for nodeIdx

function selectNodeUpdaterIdx (dag, nodeIdx) {
  const updaters = dag.dna.updater[nodeIdx]

  for (let updaterIdx = 0; updaterIdx < updaters.length; updaterIdx++) {
    const condition = dag.dna.updater[nodeIdx][updaterIdx][0]

    if (condition.length) {
      // if condition has members, then this is a 'when' condition
      const _condition = _slicedToArray(condition, 2)
      const configIdx = _condition[0]
      const valueIdx = _condition[1]

      if (dag.node[configIdx].value === dag.literal(valueIdx)) {
        // if config Node has this value,
        return updaterIdx // this is the appropriate updater
      }
    } else {
      // if empty, then this is a 'finally' condition
      return updaterIdx // this is the appropriate updater
    }
  } // The following line should never be executed, but still...

  return 0
}

/**
 * Generates a set of result values for all combinations of the dag.input values.
 *
 * For example, if fuel model has 2 input values, 1-h dead moisture has 3 input values,
 * and wind speed has 4 input values, then 2 x 3 x 4 = 24 results are generated.
 *
 * Results are stored the dag.results map of nodeIdx => [<run0>, <run1>...]
 */
function updateOrthogonalStack (dag) {
  const ptr = new Map()
  dag.requiredInputNodes().forEach(function (node) {
    return ptr.set(node, 0)
  })

  if (dag.stack.length > 0) {
    let delta = 1
    let node
    let stackIdx = 0

    while (stackIdx >= 0) {
      node = dag.stack[stackIdx]

      if (ptr.has(node)) {
        if (delta > 0) {
          // moving down the stack, so start with the first input value
          ptr.set(node, 0)
          node.value = dag.input.get(node)[0]
        } else {
          // moving up the stack, so check for another input value
          const iptr = ptr.get(node) + 1 // point to its next input value

          const inputs = dag.input.get(node) // get all the Node's input values

          ptr.set(node, iptr) // set the input value pointer

          if (iptr < inputs.length) {
            // there is another input value tp process...
            node.value = inputs[iptr] // set its next input value

            delta = 1 // and go back down the stack
          }
        }
      } else {
        // not an input Node
        if (delta > 0) {
          node.updateValue()
        }
      }

      stackIdx += delta // set the next stack node to process (+1 === next, -1 === previous)

      if (stackIdx === dag.stack.length) {
        // at the end of the stack (must be going down)
        dag.storeFunction(dag)
        dag.results.runs += 1

        if (dag.results.runs >= dag.results.runLimit) {
          dag.results.message = 'Run limit of '.concat(dag.results.runLimit, ' exceeded.')
          dag.results.ok = false
          stackIdx = 0
        }

        delta = -1 // must now go back up the stack

        stackIdx += delta // set the next stack node to process (+1 === next, -1 === previous)
      }
    } // while
  } // if ( dag.stack.length > 0 )
}

function updateCasewise (dag) {
  // Save the case input values since we need to use dag.input map for case-by-case iteration
  const saved = new Map()
  const inputNodes = dag.requiredInputNodes()
  let maxCases = 0
  inputNodes.forEach(function (node) {
    saved.set(node, _toConsumableArray(dag.input.get(node)))
    maxCases = Math.max(maxCases, saved.get(node).length)
  }) // Process each case with single input values

  const _loop = function _loop (caseIdx) {
    inputNodes.forEach(function (node) {
      const inputs = saved.get(node)
      const useIdx = Math.min(caseIdx, inputs.length - 1)
      dag.input.set(node, [inputs[useIdx]])
    })
    updateOrthogonalStack(dag)
  }

  for (let caseIdx = 0; caseIdx < maxCases; caseIdx += 1) {
    _loop(caseIdx)
  } // Restore the case values back to the dag.input map

  inputNodes.forEach(function (node) {
    return dag.input.set(node, _toConsumableArray(saved.get(node)))
  })
}

/**
 * Generates a set of result values for all combinations of the dag.input values.
 *
 * For example, if fuel model has 2 input values, 1-h dead moisture has 3 input values,
 * and wind speed has 4 input values, then 2 x 3 x 4 = 24 results are generated.
 *
 * Results are stored the dag.results map of nodeIdx => [<run0>, <run1>...]
 */
function updateOrthogonalRecursive (dag) {
  updateRecursive(dag, 0)
}

function updateRecursive (dag, stackIdx) {
  if (!dag.results.ok) return // If at the end of the stack...

  if (stackIdx === dag.stack.length) {
    dag.storeFunction(dag)
    dag.results.runs += 1

    if (dag.results.runs >= dag.results.runLimit) {
      dag.results.message = 'Run limit of '.concat(dag.results.runLimit, ' exceeded.')
      dag.results.ok = false
    }

    return
  }

  const node = dag.stack[stackIdx]

  if (dag.nodeIsInput(node)) {
    dag.input.get(node).forEach(function (value) {
      node.value = value
      updateRecursive(dag, stackIdx + 1)
    })
  } else {
    node.updateValue()
    updateRecursive(dag, stackIdx + 1)
  }
}

function update (dag) {
  // Initialize Dag results Map with an entry for each Input and Selected Node
  dag.results.map.clear()
  const inputNodes = dag.requiredInputNodes();
  [].concat(_toConsumableArray(inputNodes), _toConsumableArray(dag.selectedNodes())).forEach(function (idx) {
    return dag.results.map.set(idx, [])
  }) // Ensure every Node in the Input Set has at least 1 input value

  inputNodes.forEach(function (node) {
    if (!dag.input.has(node) || dag.input.get(node) === []) {
      dag.input.set(node, [node.value])
    }
  }) // Initialize run stats

  dag.results.ok = true
  dag.results.message = ''
  dag.results.runs = 0 // number of results stored

  dag.stack = dag.requiredUpdateNodes() // Call the appropriate update processor

  dag.results.elapsed = Date.now() // start the elapsed timer

  if (dag.mode === 'orthogonal') {
    updateOrthogonalRecursive(dag)
  } else if (dag.mode === 'casewise') {
    updateCasewise(dag)
  } else {
    updateOrthogonalStack(dag)
  }

  dag.results.elapsed = Date.now() - dag.results.elapsed
}

function _refVals (dag, pairs, name) {
  const refVals = []

  if (!Array.isArray(pairs)) {
    throw new Error(''.concat(name, '(keyValuePairs) arg must be an Array of 2-element arrays'))
  }

  pairs.forEach(function (pair, idx) {
    if (!Array.isArray(pair) || pair.length !== 2) {
      throw new Error(''.concat(name, '(keyValuesPair[').concat(idx, ']) [<node|key|index>, <value>] must be a 2-element Array'))
    }

    refVals.push([dag.get(pair[0]), pair[1]])
  })
  return refVals
}

function _valid (node, value, message) {
  if (!node.variant.isValid(value).pass) throw new Error(message)
  return value
} // Returns an array of result run indices that satisfy the input node-value pair specs

function resultIndices$1 (dag, inputNodeValuePairs) {
  return resultIndices(dag, _refVals(dag, inputNodeValuePairs, 'resultIndices'))
} // Sets the value of zero or more Config Nodes, resets the Dag topology,
// AND resets the Required and Input Sets and updates the Dag Node values

function runConfigs (dag, keyValuePairs) {
  setConfigs(dag, keyValuePairs)
  runSelected(dag, [])
} // Adds the values of zero or more Nodes to the Input Set AND updates all Node values

function runInputs (dag, keyValuePairs) {
  setInputs(dag, keyValuePairs)
  update(dag)
} // Sets the value of zero or more Config Nodes, resets the Dag topology,
// AND resets the Required and Input Sets and updates the Dag Node values

function runModules (dag, keyValuePairs) {
  setModules(dag, keyValuePairs)
  runConfigs(dag, [])
} // Adds or deletes zero or more Nodes from the Selected Set, resets the Required and Input Set,
// AND updates all Node values

function runSelected (dag, keyValuePairs) {
  setSelected(dag, keyValuePairs)
  update(dag)
} // Sets the value of zero or more Config Nodes and resets the Dag topology
// WITHOUT updating any other Node values

function setConfigs (dag, keyValuePairs) {
  _refVals(dag, keyValuePairs, 'setConfigs').forEach(function (_ref) {
    const _ref2 = _slicedToArray(_ref, 2)
    const node = _ref2[0]
    const value = _ref2[1]

    node.value = _valid(node, value, "Config Node '".concat(node.key, "' value '").concat(value, "' is invalid"))
  })

  reset(dag)
} // Adds the values of zero or more Nodes to the Input Set
// WITHOUT updating any other Node values

function setInputs (dag, keyValuePairs) {
  _refVals(dag, keyValuePairs, 'setInputs').forEach(function (_ref3) {
    const _ref4 = _slicedToArray(_ref3, 2)
    const node = _ref4[0]
    const value = _ref4[1]

    const values = Array.isArray(value) ? value : [value] // ensure values are in an array

    values.forEach(function (value) {
      _valid(node, value, "Input Node '".concat(node.key, "' value '").concat(value, "' is invalid"))
    })
    dag.input.set(node, values)
  })
} // Sets the value of zero or more Module (and their Link) Nodes
// WITHOUT updating any other Node values

function setModules (dag, keyValuePairs) {
  _refVals(dag, keyValuePairs, 'setModules').forEach(function (_ref5) {
    const _ref6 = _slicedToArray(_ref5, 2)
    const node = _ref6[0]
    const value = _ref6[1]

    node.value = _valid(node, value, "Module Node '".concat(node.key, "' value '").concat(value, "' is invalid"))
  }) // Client-crafted function that uses newly-set Module Node values to update Link Nodes

  const methodRef = dag.dna.dagMethod.get('module')
  methodRef.apply(this, [dag, dag.moduleArg])
  setConfigs(dag, [])
} // Determines the Set of required Nodes from the set of enabled selected Nodes
// Should be called after setSelected()

function setRequiredNodes (dag) {
  dag.required.clear()
  Array.from(dag.selected).forEach(function (node) {
    if (node.isEnabled) {
      setRequiredRecursive(dag, node)
    }
  })
} // Recursively determines the Set of required Nodes

function setRequiredRecursive (dag, node) {
  if (!dag.required.has(node)) {
    // Nothing more to do if node is already required
    dag.required.add(node) // Add node to the required set
    // Add all Config nodes referenced by node to the Required Set

    dag.nodeConfigs(node).forEach(function (config) {
      dag.required.add(config)
    }) // Add all this Node's producer Nodes to the Required Set

    node.producers.forEach(function (producer) {
      if (!producer.isEnabled) throw new Error("Node '".concat(node.key, "' has disabled producer '").concat(producer.key, "'"))
      setRequiredRecursive(dag, producer)
    })
  }
} // Adds/deletes zero or more Nodes to/from the Selected Set
// WITHOUT updating any other Node values

function setSelected (dag, keyValuePairs) {
  _refVals(dag, keyValuePairs, 'setSelected').forEach(function (_ref7) {
    const _ref8 = _slicedToArray(_ref7, 2)
    const node = _ref8[0]
    const select = _ref8[1]

    return select ? dag.selected.add(node) : dag.selected.delete(node)
  })

  setRequiredNodes(dag)
}

const DagDna = /* #__PURE__ */(function () {
  function DagDna (dna) {
    const _this = this

    _classCallCheck(this, DagDna)

    this.dna = dna
    this.variant = [] // each DAG gets its own Variant instances to manipulate

    this.dna.variantClass.forEach(function (Vclass) {
      _this.variant.push(new Vclass())
    }) // Node property arrays

    this.configs = new Set()
    this.input = new Map()
    this.links = new Set()
    this.mode = 'stack' // 'orthogonal' // or 'casewise', or 'stack'

    this.moduleArg = 'none' // 'independent' or 'none'

    this.modules = new Set() // references to Module Nodes

    this.required = new Set() // references to required Nodes

    this.results = {
      elapsed: 0,
      map: new Map(),
      message: '',
      ok: true,
      runs: 0,
      runLimit: 10000
    }
    this.selected = new Set() // references to selected Nodes

    this.sorted = [] // array of references to all Nodes in topological order

    this.storeFunction = storeValues
    this.node = [] // array of references to all Nodes
    // dna.variant has one element for each nodeIdx, whose value is a variant class idx

    this.dna.variant.forEach(function (variantIdx, nodeIdx) {
      const key = _this.dna.key[nodeIdx]
      const node = new Node(nodeIdx, key, _this.variant[variantIdx])

      _this.node.push(node)

      if (key.startsWith('configure.')) _this.configs.add(node); else if (key.startsWith('link.')) _this.links.add(node); else if (key.startsWith('module.')) _this.modules.add(node); else node.update.able = true
    })
    this.setConfigs([])
  }

  _createClass(DagDna, [{
    key: 'clearInputs',
    value: function clearInputs () {
      this.input.clear()
    }
  }, {
    key: 'clearSelected',
    value: function clearSelected () {
      this.selected.clear()
    } // Returns a Node reference given a Node reference, a Node key string, or a Node indice.

  }, {
    key: 'get',
    value: function get (something) {
      // this._args(arguments, 1)
      if (something instanceof Node) {
        return something
      } else if (this.dna.map.has(something)) {
        return this.node[this.dna.map.get(something)]
      } else if (typeof something === 'number' && something >= 0 && something < this.node.length) {
        return this.node[something]
      }

      throw new Error('Unable to resolve a Node reference from '.concat(something))
    } // Returns the value of the literal with literalIdx

  }, {
    key: 'literal',
    value: function literal (literalIdx) {
      return this.dna.literal[literalIdx]
    } // Returns an array of references to ALL Config Nodes that may be used by `node`
    // Called only by DagSetRun.setRequiredRecursive()

  }, {
    key: 'nodeConfigs',
    value: function nodeConfigs (node) {
      const _this2 = this

      const configs = new Set()
      this.dna.updater[node.idx].forEach(function (updater) {
        if (updater[0].length) {
          configs.add(_this2.node[updater[0][0]])
        }
      })
      return Array.from(configs)
    } // Returns TRUE if Node Variant is derived from a Config class

  }, {
    key: 'nodeIsConfig',
    value: function nodeIsConfig (node) {
      return this.configs.has(node) || this.links.has(node)
    } // Returns TRUE if Node currently uses the Dag.input() updater method AND it is required (and enabled)

  }, {
    key: 'nodeIsInput',
    value: function nodeIsInput (node) {
      return this.required.has(node) && node.update.method === this.dna.dagMethod.get('input')
    } // Returns an array of required Config Node references in topological order

  }, {
    key: 'requiredConfigNodes',
    value: function requiredConfigNodes () {
      const _this3 = this

      return this.sorted.filter(function (node) {
        return _this3.required.has(node) && _this3.nodeIsConfig(node)
      })
    } // Returns an array of required input Node references in topological order

  }, {
    key: 'requiredInputNodes',
    value: function requiredInputNodes () {
      const _this4 = this

      return this.sorted.filter(function (node) {
        return _this4.required.has(node) && _this4.nodeIsInput(node)
      })
    } // Returns an array of required Node references in topological order

  }, {
    key: 'requiredNodes',
    value: function requiredNodes () {
      const _this5 = this

      return this.sorted.filter(function (node) {
        return _this5.required.has(node)
      })
    } // Returns an array of all required, updatable (non-Config-ish) Node references in topological order.

  }, {
    key: 'requiredUpdateNodes',
    value: function requiredUpdateNodes () {
      const _this6 = this

      return this.sorted.filter(function (node) {
        return _this6.required.has(node) && node.update.able
      })
    } // Returns an array of result run indices that satisfy the input node-value pair specs

  }, {
    key: 'resultIndices',
    value: function resultIndices (inputNodeValuePairs) {
      return resultIndices$1(this, inputNodeValuePairs)
    } // Returns the Node's result value for the specified run index

  }, {
    key: 'resultValue',
    value: function resultValue$1 (nodeRefOrKey, runIdx) {
      return resultValue(this, this.get(nodeRefOrKey), runIdx)
    } // Sets the value of zero or more Config Nodes AND updates all Node values

  }, {
    key: 'runConfigs',
    value: function runConfigs$1 (keyValuePairs) {
      return runConfigs(this, keyValuePairs)
    } // Sets the inputs values of zero or more input Nodes AND updates all Node values

  }, {
    key: 'runInputs',
    value: function runInputs$1 (keyValuePairs) {
      return runInputs(this, keyValuePairs)
    } // Sets the value of zero or more Module (and their Link) Nodes AND updates all Node values

  }, {
    key: 'runModules',
    value: function runModules$1 (keyValuePairs) {
      return runModules(this, keyValuePairs)
    } // Sets the value of zero or more Config Nodes, then resets the Required Set and node values

  }, {
    key: 'runSelected',
    value: function runSelected$1 (keyValuePairs) {
      return runSelected(this, keyValuePairs)
    } // Returns an array of references to all selected Nodes

  }, {
    key: 'selectedNodes',
    value: function selectedNodes () {
      return Array.from(this.selected)
    } // Sets the value of zero or more Config Nodes WITHOUT updating any other Node values

  }, {
    key: 'setConfigs',
    value: function setConfigs$1 (keyValuePairs) {
      return setConfigs(this, keyValuePairs)
    } // Adds the values of zero or more Nodes to the Input Set WITHOUT updating any other Node values

  }, {
    key: 'setInputs',
    value: function setInputs$1 (keyValuePairs) {
      return setInputs(this, keyValuePairs)
    } // Sets the value of zero or more Module (and Link) Nodes WITHOUT updating any other Node values

  }, {
    key: 'setModules',
    value: function setModules$1 (keyValuePairs) {
      return setModules(this, keyValuePairs)
    }
  }, {
    key: 'setRunLimit',
    value: function setRunLimit (limit) {
      this.results.runLimit = limit
    } // Adds or deletes zero or more Nodes from the selection set WITHOUT updating the required set or node values.

  }, {
    key: 'setSelected',
    value: function setSelected$1 (keyValuePairs) {
      return setSelected(this, keyValuePairs)
    }
  }])

  return DagDna
}())

const Dag = /* #__PURE__ */(function () {
  function Dag (dna) {
    _classCallCheck(this, Dag)

    if (arguments.length !== 1) throw new Error('new Dag(dna) requires a Dna argument')
    if (dna.dagMethod === undefined) throw new Error('new Dag(dna) arg 1 is not a valid Dna argument')
    this.dna = new DagDna(dna)
  }

  _createClass(Dag, [{
    key: 'clearInputs',
    value: function clearInputs () {
      this.dna.clearInputs()
    }
  }, {
    key: 'clearSelected',
    value: function clearSelected () {
      this.dna.clearSelected()
    } // Returns a Node reference given a Node reference, a Node key string, or a Node indice.

  }, {
    key: 'get',
    value: function get (nodeRefKeyIdx) {
      return this.dna.get(nodeRefKeyIdx)
    }
  }, {
    key: 'nodeIsInput',
    value: function nodeIsInput (node) {
      return this.dna.nodeIsInput(node)
    } // Returns an array of required input Node references in topological order

  }, {
    key: 'requiredConfigNodes',
    value: function requiredConfigNodes () {
      return this.dna.requiredConfigNodes()
    } // Returns an array of required input Node references in topological order

  }, {
    key: 'requiredInputNodes',
    value: function requiredInputNodes () {
      return this.dna.requiredInputNodes()
    } // Returns an array of required Node references in topological order

  }, {
    key: 'requiredNodes',
    value: function requiredNodes () {
      return this.dna.requiredNodes()
    } // Returns an array of all required, updatable (non-Config-ish) Node references in topological order.

  }, {
    key: 'requiredUpdateNodes',
    value: function requiredUpdateNodes () {
      return this.dna.requiredUpdateNodes()
    } // Returns the results object {elasped: <ms>, map: <nodeMap>, message: <str>, ok: <bool>, runs: <n>,runLimit: <n>}

  }, {
    key: 'results',
    value: function results () {
      return this.dna.results
    } // Returns an array of result run indices that satisfy the input node-value pair specs

  }, {
    key: 'resultIndices',
    value: function resultIndices (inputNodeValuePairs) {
      return this.dna.resultIndices(inputNodeValuePairs)
    } // Returns the Node's result value for the specified run index

  }, {
    key: 'resultValue',
    value: function resultValue (nodeRefOrKey, runIdx) {
      return this.dna.resultValue(nodeRefOrKey, runIdx)
    } // Sets the value of zero or more Config Nodes, resets the Dag topology, AND updates all Node values

  }, {
    key: 'runConfigs',
    value: function runConfigs (keyValuePairs) {
      return this.dna.runConfigs(keyValuePairs)
    } // Sets the inputs values of zero or more input Nodes AND updates all Node values

  }, {
    key: 'runInputs',
    value: function runInputs (keyValuePairs) {
      return this.dna.runInputs(keyValuePairs)
    } // Sets the value of zero or more Module (and their Link) Nodes, AND updates all Node values

  }, {
    key: 'runModules',
    value: function runModules (keyValuePairs) {
      return this.dna.runModules(keyValuePairs)
    } // Sets the value of zero or more Config Nodes, AND updates all Node values

  }, {
    key: 'runSelected',
    value: function runSelected (keyValuePairs) {
      return this.dna.runSelected(keyValuePairs)
    } // Returns an array of references to all selected Nodes

  }, {
    key: 'selectedNodes',
    value: function selectedNodes () {
      return this.dna.selectedNodes()
    } // Sets the value of zero or more Config Nodes WITHOUT updating any other Node values

  }, {
    key: 'setConfigs',
    value: function setConfigs (keyValuePairs) {
      return this.dna.setConfigs(keyValuePairs)
    } // Sets the inputs values of zero or more input Nodes WITHOUT updating any other Node values

  }, {
    key: 'setInputs',
    value: function setInputs (keyValuePairs) {
      return this.dna.setInputs(keyValuePairs)
    } // Sets the run mode to 'orthogonal'

  }, {
    key: 'setModeCasewise',
    value: function setModeCasewise () {
      this.dna.mode = 'casewise'
    }
  }, {
    key: 'setModeOrthogonal',
    value: function setModeOrthogonal () {
      this.dna.mode = 'orthogonal'
    } // Sets the value of zero or more Module (and their Link) Nodes WITHOUT updating any other Node values

  }, {
    key: 'setModules',
    value: function setModules (keyValuePairs) {
      return this.dna.setModules(keyValuePairs)
    }
  }, {
    key: 'setRunLimit',
    value: function setRunLimit (limit) {
      this.dna.setRunLimit(limit)
    } // Adds or deletes zero or more Nodes from the selection set WITHOUT updating the required set or node values.

  }, {
    key: 'setSelected',
    value: function setSelected (keyValuePairs) {
      return this.dna.setSelected(keyValuePairs)
    }
  }, {
    key: 'setStoreFunction',
    value: function setStoreFunction (storeFunction) {
      this.dna.storeFunction = storeFunction
    }
  }])

  return Dag
}())

/**
 * @file class AbstractVariant
 * @copyright 2020 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
 * @version 0.1.0
 * #coverage-20200506
 */

/**
 * AbstractVariant is the abstract base class of all other, more specialized, Variants.
 *
 * A Variant is a *specification* for a Node value.
 * Variant does not actually hold a value itself, rather specifications for:
 * - the *type* of value held by a Node,
 * - all input filters, validators, and validation specs to be applied to a Node's value, and
 * - all display transformers, converters, and decorators for a Node's value.
 */
const AbstractVariant = /* #__PURE__ */(function () {
  function AbstractVariant (defaultValue) {
    _classCallCheck(this, AbstractVariant)

    this._display = {}
    this._specs = {
      _defaultValue: defaultValue
    }
    this._validator = []
  }

  _createClass(AbstractVariant, [{
    key: 'defaultValue',
    value: function defaultValue () {
      return this._specs._defaultValue
    }
    /**
     * The displayString may be a decorated version of a displayValue
     */

  }, {
    key: 'displayString',
    value: function displayString (value) {
      return this.displayValue(value)
    }
  }, {
    key: 'displayUnits',
    value: function displayUnits () {
      return ''
    }
    /**
     * Returns the current value converted to a string.
     * @param {any} value
     */

  }, {
    key: 'displayValue',
    value: function displayValue (value) {
      return value.toString()
    }
  }, {
    key: 'isValid',
    value: function isValid (value) {
      for (let _i = 0, _Object$entries = Object.entries(this._validator); _i < _Object$entries.length; _i++) {
        const _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2)
        const key = _Object$entries$_i[0]
        const func = _Object$entries$_i[1]

        if (!func(value)) {
          return {
            pass: false,
            value: value,
            fails: key
          }
        }
      }

      return {
        pass: true,
        value: value,
        fails: 'none'
      }
    }
  }])

  return AbstractVariant
}())

/**
 * Blob is an Variant whose value is a generic Javascript Object.
 *
 * Blob should be treated as an abstract class: derived classes
 * should be developed for Nodes with a specific value object structure.
 */

const Blob = /* #__PURE__ */(function (_AbstractVariant) {
  _inherits(Blob, _AbstractVariant)

  const _super = _createSuper(Blob)

  function Blob () {
    const defaultValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}

    _classCallCheck(this, Blob)

    if (_typeof(defaultValue) !== 'object') {
      throw new Error('new Variant.Blob('.concat(JSON.stringify(defaultValue), ") requires an the 'defaultValue' argument to be an 'object'"))
    }

    return _super.call(this, defaultValue)
  }

  _createClass(Blob, [{
    key: 'displayString',
    value: function displayString (value) {
      return JSON.stringify(value)
    }
  }])

  return Blob
}(AbstractVariant))

/**
 * Bool is a Variant whose value is a Javascript boolean primitive,
 * and whose display may be decorated with strings representing its
 * 'true' and 'false' state.
 */

const Bool = /* #__PURE__ */(function (_AbstractVariant) {
  _inherits(Bool, _AbstractVariant)

  const _super = _createSuper(Bool)

  function Bool () {
    let _this

    const defaultValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false
    const trueString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'true'
    const falseString = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'false'

    _classCallCheck(this, Bool)

    if (typeof defaultValue !== 'boolean') {
      throw new Error('new Variant.Bool('.concat(defaultValue, ") requires the 'defaultValue' argument to be a 'boolean'"))
    } else if (typeof trueString !== 'string') {
      throw new Error('new Variant.Bool('.concat(defaultValue, ", trueString) requires the 'trueString' argument to be a 'string'"))
    } else if (typeof falseString !== 'string') {
      throw new Error('new Variant.Bool('.concat(defaultValue, ", trueString, falseString) requires the 'falseString' argument to be a 'string'"))
    }

    _this = _super.call(this, defaultValue)
    _this._specs._trueString = trueString
    _this._specs._falseString = falseString

    _this._validator.isBool = function (value) {
      return typeof value === 'boolean'
    }

    return _this
  }

  _createClass(Bool, [{
    key: 'displayString',
    value: function displayString (value) {
      return value ? this._specs._trueString : this._specs._falseString
    }
  }])

  return Bool
}(AbstractVariant))

/**
 * Numeric is a Variant whose value is a Javascript number primitive
 * and whose filters ensure a numeric value.
 */

const Numeric = /* #__PURE__ */(function (_AbstractVariant) {
  _inherits(Numeric, _AbstractVariant)

  const _super = _createSuper(Numeric)

  function Numeric () {
    let _this

    const defaultValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0
    const minValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1 - Number.MAX_VALUE
    const maxValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Number.MAX_VALUE

    _classCallCheck(this, Numeric)

    if (typeof defaultValue !== 'number') {
      throw new Error('new Variant.Numeric('.concat(defaultValue, ") requires the 'defaultValue' argument to be a 'number'"))
    } else if (typeof minValue !== 'number') {
      throw new Error('new Variant.Numeric('.concat(defaultValue, ', ').concat(minValue, ") requires the 'minValue' argument to be a 'number'"))
    } else if (typeof maxValue !== 'number') {
      throw new Error('new Variant.Numeric('.concat(defaultValue, ', ').concat(minValue, ', ').concat(maxValue, ") requires an 'maxValue' argument to be a 'number'"))
    } else if (minValue > maxValue) {
      throw new Error('new Variant.Numeric('.concat(defaultValue, ', ').concat(minValue, ', ').concat(maxValue, ') minValue exceeds maxValue'))
    } else if (defaultValue < minValue) {
      throw new Error('new Variant.Numeric('.concat(defaultValue, ', ').concat(minValue, ', ').concat(maxValue, ') defaultValue is less than minValue'))
    } else if (defaultValue > maxValue) {
      throw new Error('new Variant.Numeric('.concat(defaultValue, ', ').concat(minValue, ', ').concat(maxValue, ') defaultValue exceeds maxValue'))
    }

    _this = _super.call(this, defaultValue)
    _this._specs._minimumValue = minValue
    _this._specs._maximumValue = maxValue

    _this._validator.isNumeric = function (value) {
      return typeof value === 'number'
    }

    _this._validator.minimumValue = function (value) {
      return value >= _this._specs._minimumValue
    }

    _this._validator.maximumValue = function (value) {
      return value <= _this._specs._maximumValue
    }

    return _this
  }

  return Numeric
}(AbstractVariant))

/**
 * Integer is a Numeric Variant whose value is an integer.
 */

const Integer = /* #__PURE__ */(function (_Numeric) {
  _inherits(Integer, _Numeric)

  const _super = _createSuper(Integer)

  function Integer () {
    let _this

    const defaultValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0
    const minValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1 - Number.MAX_VALUE
    const maxValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Number.MAX_VALUE

    _classCallCheck(this, Integer)

    if (typeof defaultValue !== 'number' || Number.isInteger(defaultValue) === false) {
      throw new Error('new Variant.Integer('.concat(defaultValue, ") requires the 'defaultValue' argument to be an integer 'number'"))
    } else if (typeof minValue !== 'number' || Number.isInteger(minValue) === false) {
      throw new Error('new Variant.Integer('.concat(defaultValue, ', ').concat(minValue, ") requires the 'minValue' argument to be an integer 'number'"))
    } else if (typeof maxValue !== 'number' || Number.isInteger(maxValue) === false) {
      throw new Error('new Variant.Integer('.concat(defaultValue, ', ').concat(minValue, ', ').concat(maxValue, ") requires an 'maxValue' argument to be an integer 'number'"))
    }

    _this = _super.call(this, defaultValue, minValue, maxValue)

    _this._validator.isInteger = function (value) {
      return Number.isInteger(value)
    }

    return _this
  }

  return Integer
}(Numeric))

/**
 * Count is an Integer Variant whose minimum value is 0.
 */

const Count = /* #__PURE__ */(function (_Integer) {
  _inherits(Count, _Integer)

  const _super = _createSuper(Count)

  function Count () {
    const defaultValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0
    const maxValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.MAX_VALUE

    _classCallCheck(this, Count)

    return _super.call(this, defaultValue, 0, maxValue)
  }

  return Count
}(Integer))
/**
 * Index is an Count Variant whose maximum value is size-1.
 */

const Index = /* #__PURE__ */(function (_Count) {
  _inherits(Index, _Count)

  const _super2 = _createSuper(Index)

  function Index () {
    let _this

    const maxSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1

    _classCallCheck(this, Index)

    _this = _super2.call(this, 0, maxSize - 1)
    _this._specs._maxSize = maxSize
    return _this
  }

  return Index
}(Count))

/**
 * Float is a Numeric Variant whose value may be a floating point or integer number,
 * and whose display value may be
 * - a fixed number of decimals,
 * - a fixed precision, or
 * - an exponential number with a fixed number of decimal digits.
 */

const Float = /* #__PURE__ */(function (_Numeric) {
  _inherits(Float, _Numeric)

  const _super = _createSuper(Float)

  function Float () {
    let _this

    const defaultValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0
    const minValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1 - Number.MAX_VALUE
    const maxValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Number.MAX_VALUE

    _classCallCheck(this, Float)

    _this = _super.call(this, defaultValue, minValue, maxValue)
    _this._display._mode = 'fixed'
    _this._display._decimals = 2
    return _this
  }

  _createClass(Float, [{
    key: 'setDisplayExponential',
    value: function setDisplayExponential (decimals) {
      this._display._mode = 'exponential'
      this._display._decimals = decimals
    }
  }, {
    key: 'setDisplayFixed',
    value: function setDisplayFixed (decimals) {
      this._display._mode = 'fixed'
      this._display._decimals = decimals
    }
  }, {
    key: 'setDisplayPrecision',
    value: function setDisplayPrecision (decimals) {
      this._display._mode = 'precision'
      this._display._decimals = decimals
    }
    /**
     * Converts a numeric value into a string in the current display mode.
     * @param {number} value
     */

  }, {
    key: 'displayString',
    value: function displayString (value) {
      return this.displayValue(value)
    }
    /**
     * Converts a numeric value into a string in the current display mode.
     * @param {number} value
     * @return {string} The value arg in the display mode.
     */

  }, {
    key: 'displayValue',
    value: function displayValue (value) {
      if (this._display._mode === 'precision') {
        return value.toPrecision(this._display._decimals)
      }

      if (this._display._mode === 'exponential') {
        return value.toExponential(this._display._decimals)
      }

      return value.toFixed(this._display._decimals)
    }
  }])

  return Float
}(Numeric))

/**
 * Option is a Variant whose value is a Javascript string primitive
 * and a member of a predefined set of strings.
 */

const Option = /* #__PURE__ */(function (_AbstractVariant) {
  _inherits(Option, _AbstractVariant)

  const _super = _createSuper(Option)

  function Option (validOptionsArray) {
    let _this

    const defaultOptionIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0

    _classCallCheck(this, Option)

    if (!(validOptionsArray instanceof Array)) {
      throw new Error('new Variant.Option('.concat(validOptionsArray, ') options array is not an array'))
    } else if (defaultOptionIndex < 0 || defaultOptionIndex >= validOptionsArray.length) {
      throw new Error('new Variant.Option('.concat(validOptionsArray, ', ').concat(defaultOptionIndex, ') defaultOptionIndex is invalid'))
    }

    _this = _super.call(this, validOptionsArray[defaultOptionIndex])
    _this._specs._options = validOptionsArray

    _this._validator.isString = function (value) {
      return typeof value === 'string'
    }

    _this._validator.isMember = function (value) {
      return _this.has(value)
    }

    return _this
  }

  _createClass(Option, [{
    key: 'displayString',
    value: function displayString (option) {
      this.ensure(option) // @todo Check for translation table

      return option
    }
  }, {
    key: 'ensure',
    value: function ensure (option) {
      if (!this.has(option)) {
        throw new Error("Invalid Option '".concat(option, "'"))
      }

      return true
    }
  }, {
    key: 'has',
    value: function has (option) {
      return this._specs._options.includes(option)
    }
  }, {
    key: 'options',
    value: function options () {
      return this._specs._options
    }
  }])

  return Option
}(AbstractVariant))

/**
 * @file Data and methods to support Quantity units-of-measure and conversions.
 * @copyright 2020 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
 * @version 0.1.0
 * #coverage-20200506
 */

/**
  * UnitsOfMeasure defines all base units which are subsequently
  * which are subsequently exponentiated and/or combined into
  * derived units-of-measure.
  *
  * Some examples:
  * - the distance UoM 'ft' and the time UoM 'min' are combined
  *   to form the derived UoM velocity of 'ft/min'
  * - the distance UoM 'ft' is eponentiated to form area 'ft2' and volume 'ft3'
  * - and so forth, such as 'btu/ft2-s'
  *
  * The array also includes UoMs with special names that cannot be parsed
  * into their base units; 'ac', 'ha', and 'W' for example.  Otherwise, only the
  * fundamental units are defined here.
  *
  * Each entry is a 2-element array:
  * - Element 0 is the unit-of-measure key,
  * - Element 1 is a multiplication factor for converting a value
  *   from its (arbitrary) *base* amount into the units-of-measure key amount.
  *
  * For example, to convert from 'x' ft into
  * - inches, multiply by 12,
  * - yards, multiply by 1/3, and
  * - chains, multiply by 1/11
  *
  * The *base* unit-of-measure is arbitrarily chosen for each fundamental
  * quantity (arc, distance, energy, mass, ratio, temperature, time).
  * While it is never necessary for the client to know what base unit was chosen,
  * it can be ascertained by its multiplication factor === 1.
  */
const UnitsOfMeasure = [// unity
  ['1', 1], // arc ('deg' is the base)
  ['deg', 1], ['\xB0', 1], ['\u2109', 1], // oF
  ['\u2103', 1], // oC
  // distance ('ft' is base)
  ['ft', 1], // based on [ft_us}, NOT [ft_i]]
  ['ch', 1 / 66], ['in', 12], ['mi', 1 / 5280], ['yd', 1 / 3], ['m', 0.3048], ['cm', 30.48], ['mm', 304.8], ['km', 0.0003048], ['ac', 1 / 43560], ['ha', 1 / 107639], ['W', 1 / 0.057], // energy ('btu' is base)
  ['btu', 1], // [Btu_IT]
  ['J', 1055.05585262], // btu_IT:
  // mass ('lb' is base)
  ['lb', 1], ['oz', 16], ['ton', 1 / 2000], ['kg', 0.45359237], ['g', 453.59237], ['T', 0.00045359237], // 1 / 2204.622621848776
  // ratio ('ratio' is base)
  ['ratio', 1], ['percent', 100], ['%', 100], // temp ('F' is base)
  ['F', 1], ['C', 5 / 9], ['K', 5 / 9], // time ('min' is base)
  ['min', 1], ['s', 60], ['h', 1 / 60], ['d', 1 / (60 * 24)], ['y', 1 / (60 * 24 * 365)]]
const UnitsMap = new Map(UnitsOfMeasure)

/**
 * @file Units-of-measure conversion methods
 * @copyright 2020 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
 * @version 0.1.0
 * #coverage-20200507
 */
/**
 * Returns the 'asUnits' amount that is equivalent to base units `baseAmount`
 *
 * This is used by the behaveplus-dag Node class to convert Node values
 * (which are stored in base units) to some other display/output units-of-measure.
 *
 * @param {number} baseAmount The amount of some Quantity expressed in its base units
 * @param {string} asUnits The amount of the Quantity expressed in the `asUnits`
 */

function asAmount (baseAmount, asUnits) {
  // Special case:: temperature scale
  if (asUnits === 'F' || asUnits === '\u2109') {
    return baseAmount
  } else if (asUnits === 'C' || asUnits === '\u2103') {
    return (baseAmount - 32) * 5 / 9
  } else if (asUnits === 'K') {
    return 273.15 + (baseAmount - 32) * 5 / 9
  }

  const f = factor(asUnits)
  return f * baseAmount
}
/**
 * Returns the base amount that is equivalent to `fromAmount` `fromUnits`
 *
 * This is used by the behaveplus-dag Node class to convert display/input amounts
 * into Node values (which are stored in base units).
 *
 * @param {number} fromAmount The amount of some Quantity expressed in `asUnits`
 * @param {string} fromUnits The `fromAmount` units-of-measure
 */

function baseAmount (fromAmount, fromUnits) {
  // Special case:: temperature scale
  if (fromUnits === 'F' || fromUnits === '\u2109') {
    return fromAmount
  } else if (fromUnits === 'C' || fromUnits === '\u2103') {
    return 32 + 9 * fromAmount / 5
  } else if (fromUnits === 'K') {
    return 32 + 9 * (fromAmount - 273.15) / 5
  }

  const f = factor(fromUnits)
  return fromAmount / f
}
/**
 * Converts an amount from some units-of-measure into another units-of-measure.
 *
 * @param {number} fromAmount The amount of some quantity as measured in `fromUnits`
 * @param {string} fromUnits The units-of-measure of the `fromAmount`
 * @param {string} intoUnits The units-of-measure of the converted amount.
 * @return {number} The `fromAmount` converted into `intoUnits`
 *
 * NOTE: This does not test if `fromUnits` and `intoUnits` are compatible!
 */

function convert (fromAmount, fromUnits, intoUnits) {
  return asAmount(baseAmount(fromAmount, fromUnits), intoUnits)
}
/**
 * Returns the multiplication factor to convert an amount from `units`
 * into its (anonymous) base units.
 *
 *  This function does some basic parsing of compound units-of-measure,
 *  and can handle the following syntax:
 * - 'ft' (simple one-dim measure, simple single term)
 * - 'ft2'  (multi-dim measure, simple single term)
 * - 'ft3' (multi-dim measure, simple single term)
 * - 'ft/min' (simple one-dim numerator with simple on-dim denom)
 * - 'ft2/ft3' (simple multi-dim numerator with simple multi-dim denom)
 * - '1/ft'  (reduced simple multi-dim numerator with simple multi-dim denom)
 * - 'lb/ft2'
 * - 'T/ha', 't/ac' (multi-dim measure with an alias)
 * - 'lb/ft3'
 * - 'btu/ft/s'
 * - 'btu/ft-s'
 * - 'ft-lb/min'
 *
 * This function can also be used to ensure correct units-of-measure strings,
 * as it will throw an Error if it is unable to parse the units.
 *
 * @param {string} units Units-of-measure string.  The following syntax is accepted:
 * @returns {number} The multiplication factor to convert an amount from some `units`
 * into its (anonymous) base units.
 */

function factor (units) {
  let f = 1 // split into at least 1 numerator and 0 or more denominators

  units.split('/').forEach(function (part, idx) {
    // Special case: numerator is just '1' as in '1/ft'
    if (idx === 0 && part === '1') ; else {
      // split into terms
      part.split('-').forEach(function (term) {
        let power = 1
        let uom = term
        const lastChar = term.charAt(term.length - 1)

        if (lastChar === '2') {
          uom = term.substring(0, term.length - 1)
          power = 2
        } else if (lastChar === '3') {
          power = 3
          uom = term.substring(0, term.length - 1)
        }

        if (!UnitsMap.has(uom)) {
          throw new Error("Units '".concat(units, " term '").concat(term, "' uom '").concat(uom, "' is invalid"))
        }

        const termFactor = Math.pow(UnitsMap.get(uom), power) // If before the first '/', multiply; otherwise, divide

        f *= idx === 0 ? termFactor : 1 / termFactor
      })
    }
  })
  return f
}

/**
 * Quantity is a Float Variant class with a minimum value of 0 and a units-of-measure.
 *
 * In addition to a 'base' units-of-measure, a Quantity has a current display
 * units-of-measure; calling displayString() transforms the base amount to the display amount.
 *
 * Quantity is able to convert between a base units-of-measure and other defined
 * units-of-measure.
 */

const Quantity = /* #__PURE__ */(function (_Float) {
  _inherits(Quantity, _Float)

  const _super = _createSuper(Quantity)

  /**
   *
   * @param {string[]} uom Array of allowed units-of-measure (i.e., ['lb/ft2', 't/ac', 'kg/m2', 'T/ha'] )
   * @param {number} defaultValue  If omitted, set to 0
   * @param {number} maxValue If omitted, set to Number.MAX_VALUE
   */
  function Quantity (uomArray) {
    let _this

    const defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0
    const maxValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Number.MAX_VALUE

    _classCallCheck(this, Quantity)

    if (!(uomArray instanceof Array)) {
      throw new Error("Quantity() arg 1 expects an array, but got '".concat(_typeof(uomArray), "'"))
    }

    uomArray.forEach(function (uom) {
      return factor(uom)
    })
    _this = _super.call(this, defaultValue, 0, maxValue)
    _this._specs._uomArray = uomArray
    _this._display._units = uomArray[0]
    return _this
  }
  /**
   * Returns the `baseAmount` expressed in the current display units-of-measure.
   * @param {number} baseAmount  The base amount (usually a Quantity Node value)
   */

  _createClass(Quantity, [{
    key: 'baseAsDisplayUom',
    value: function baseAsDisplayUom (baseAmount) {
      return this.baseAsUom(baseAmount, this._display._units)
    }
    /**
     * Returns the `baseAmount` expressed in `asUnits`
     * @param {number} baseAmount
     * @param {string} asUnits
     */

  }, {
    key: 'baseAsUom',
    value: function baseAsUom (baseAmount, asUnits) {
      return asAmount(baseAmount, asUnits)
    }
    /**
     * Returns the `fromAmount` expressed in its base units-of-measure.
     * @param {number} fromAmount The quantity amount expressed in `fromUnits`
     * @param {string} fromUnits The `fromAmount` units-of-measure
     */

  }, {
    key: 'baseFromUom',
    value: function baseFromUom (fromAmount, fromUnits) {
      return baseAmount(fromAmount, fromUnits)
    }
  }, {
    key: 'convert',
    value: function convert$1 (fromAmount, fromUnits, intoUnits) {
      return convert(fromAmount, fromUnits, intoUnits)
    }
    /**
     * Usually called by Node to express its current value on some display units and format.
     * @param {number} baseAmount
     */

  }, {
    key: 'displayString',
    value: function displayString (baseAmount) {
      return ''.concat(this.displayValue(baseAmount), ' ').concat(this._display._units)
    }
  }, {
    key: 'displayUnits',
    value: function displayUnits () {
      return this._display._units
    }
    /**
     * Usually called by Node to express its current value on some display units and format.
     * @param {number} baseAmount
     */

  }, {
    key: 'displayValue',
    value: function displayValue (baseAmount) {
      const displayAmount = this.baseAsDisplayUom(baseAmount)
      return Float.prototype.displayValue.call(this, displayAmount)
    }
  }, {
    key: 'setDisplayUnits',
    value: function setDisplayUnits (units) {
      factor(units) // throws Error if bad units

      this._display._units = units
    }
    /**
     * @return Array of units-of-measure property key strings available for this Quantity
     */

  }, {
    key: 'uomKeys',
    value: function uomKeys () {
      return this._specs._uomArray
    }
  }])

  return Quantity
}(Float))

/**
 * Slope is a special case of Quantity, as it can be expressed
 * in 2 distinct systems of measurement:
 * - as a ratio of delta vertical / delta horizontal (range 0..inf),
 * - or as degrees above the horizontal (range 0..90)
 */

const Slope = /* #__PURE__ */(function (_Quantity) {
  _inherits(Slope, _Quantity)

  const _super = _createSuper(Slope)

  // 'ratio' is the base, and we handle 'deg' as special case
  function Slope () {
    const defaultValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0

    _classCallCheck(this, Slope)

    return _super.call(this, ['ratio', 'percent', '%'], defaultValue)
  }

  _createClass(Slope, [{
    key: 'baseAsUom',
    value: function baseAsUom (baseAmount, asUnits) {
      return asUnits === 'deg' ? Slope.slopeDegrees(baseAmount) : Quantity.prototype.baseAsUom(baseAmount, asUnits)
    }
  }, {
    key: 'baseFromUom',
    value: function baseFromUom (fromAmount, fromUnits) {
      return fromUnits === 'deg' ? Quantity.prototype.baseFromUom(Slope.slopeRatio(fromAmount), 'ratio') : Quantity.prototype.baseFromUom(fromAmount, fromUnits)
    }
  }, {
    key: 'convert',
    value: function convert (fromAmount, fromUnits, intoUnits) {
      return this.baseAsUom(this.baseFromUom(fromAmount, fromUnits), intoUnits)
    }
    /**
     * @return Array of units-of-measure property key strings available for this Quantity
     */

  }, {
    key: 'uomKeys',
    value: function uomKeys () {
      return ['ratio', 'percent', '%', 'deg']
    }
  }], [{
    key: 'constrain',
    value: function constrain (degrees) {
      while (degrees >= 90) {
        degrees -= 90
      }

      while (degrees < 0) {
        degrees += 90
      }

      return degrees
    }
  }, {
    key: 'degrees',
    value: function degrees (radians) {
      return radians * 180 / Math.PI
    }
  }, {
    key: 'radians',
    value: function radians (degrees) {
      return degrees * Math.PI / 180
    }
  }, {
    key: 'slopeDegrees',
    value: function slopeDegrees (ratio) {
      const radians = Math.atan(ratio)
      return Slope.degrees(radians)
    }
  }, {
    key: 'slopeRatio',
    value: function slopeRatio (degrees) {
      const rad = Slope.radians(Slope.constrain(degrees))
      return Math.tan(rad)
    }
  }])

  return Slope
}(Quantity))

/**
 * Text is a Variant whose value is a Javascript string primitive.
 */

const Text = /* #__PURE__ */(function (_AbstractVariant) {
  _inherits(Text, _AbstractVariant)

  const _super = _createSuper(Text)

  function Text () {
    let _this

    const defaultValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ''
    const minLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0
    const maxLength = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 999999

    _classCallCheck(this, Text)

    if (typeof defaultValue !== 'string') {
      throw new Error('new Variant.Text('.concat(defaultValue, ") requires the 'defaultValue' argument to be a 'string'"))
    } else if (typeof minLength !== 'number') {
      throw new Error('new Variant.Text('.concat(defaultValue, ', ').concat(minLength, ") requires the 'minLength' argument to be a 'number', but received a ").concat(_typeof(minLength)))
    } else if (typeof maxLength !== 'number') {
      throw new Error('new Variant.Text('.concat(defaultValue, ', ').concat(minLength, ', ').concat(maxLength, ") requires an 'maxLength' argument to be a 'number'"))
    } else if (minLength > maxLength) {
      throw new Error('new Variant.Text('.concat(defaultValue, ', ').concat(minLength, ', ').concat(maxLength, ') minLength exceeds maxLength'))
    } else if (defaultValue.length < minLength) {
      throw new Error('new Variant.Text('.concat(defaultValue, ', ').concat(minLength, ', ').concat(maxLength, ') defaultValue length is less than minLength'))
    } else if (defaultValue.length > maxLength) {
      throw new Error('new Variant.Text('.concat(defaultValue, ', ').concat(minLength, ', ').concat(maxLength, ') defaultValue length exceeds maxLength'))
    }

    _this = _super.call(this, defaultValue)
    _this._specs._minimumLength = minLength
    _this._specs._maximumLength = maxLength

    _this._validator.isString = function (value) {
      return typeof value === 'string'
    }

    _this._validator.minimumLength = function (value) {
      return value.length >= _this._specs._minimumLength
    }

    _this._validator.maximumLength = function (value) {
      return value.length <= _this._specs._maximumLength
    }

    return _this
  }

  return Text
}(AbstractVariant))

/**
 * @file Exported WFSP math functions.
 * @version 0.1.0
 * @copyright Systems for Environmental Management 2020
 * @author Collin D. Bevins <cbevins@montana.com>
 * @license MIT
 */
const divide = function divide () {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key]
  }

  return numbers.reduce(function (a, b) {
    return b === 0 ? 0 : a / b
  }, numbers[0] * numbers[0])
}
const fraction = function fraction (number) {
  return Math.max(0, Math.min(1, number))
}
const greaterThan = function greaterThan (a, b) {
  return a > b
}
const multiply = function multiply () {
  for (var _len2 = arguments.length, numbers = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    numbers[_key2] = arguments[_key2]
  }

  return numbers.reduce(function (a, b) {
    return a * b
  }, 1)
}
const or = function or (a, b) {
  return a || b
}
const positive = function positive (number) {
  return Math.max(0, number)
}
const sum = function sum () {
  for (var _len4 = arguments.length, numbers = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    numbers[_key4] = arguments[_key4]
  }

  return numbers.reduce(function (a, b) {
    return a + b
  }, 0)
}
const sumOfProducts = function sumOfProducts () {
  for (var _len5 = arguments.length, numbers = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    numbers[_key5] = arguments[_key5]
  }

  const mid = Math.floor(numbers.length / 2)
  const a1 = numbers.slice(0, mid)
  return a1.reduce(function (acc, number, idx) {
    return acc + a1[idx] * numbers[mid + idx]
  }, 0)
}

/**
 * @file Exported WFSP standard Behave fuel model equations as implemented by BehavePlus v6.
 * @version 0.1.0
 * @copyright Systems for Environmental Management 2020
 * @author Collin D. Bevins
 * @license MIT
 */
function curedHerbFraction (liveHerbMc) {
  const fraction$1 = 1.333 - 1.11 * liveHerbMc
  return fraction(fraction$1)
}
function deadHerbLoad (totalHerbLoad, curedHerbFraction) {
  return totalHerbLoad * curedHerbFraction
}
function liveHerbLoad (totalHerbLoad, curedHerbFraction) {
  return totalHerbLoad * (1 - curedHerbFraction)
}

/**
 * @file Exported WFSP canopy functions as implemented by BehavePlus v6.
 * @version 0.1.0
 * @copyright Systems for Environmental Management 2020
 * @author Collin D. Bevins <cbevins@montana.com>
 * @license MIT
 */
// is filled with tree crowns (division by 3 assumes conical crown shapes).

function crownFill (cover, cratio) {
  return fraction(cratio) * fraction(cover) / 3
} // Crown length

function crownLength (baseHt, ht) {
  return positive(ht - baseHt)
} // // Crown length from crown ratio and canopy height
// export function crownLengthFromRatio(crownRatio, ht) {
//   return crownRatio * ht
// }
// Crown ratio

function crownRatio (length, ht) {
  return fraction(divide(length, ht))
} // Canopy fuel load

function fuelLoad (bulk, length) {
  return positive(bulk * length)
} // Canopy heat per unit area

function heatPerUnitArea (load, heat) {
  return positive(load * heat)
} // Returns true if canopy effectively shelters the fuel from wind

function sheltersFuelFromWind (cover, ht, fill) {
  return cover >= 0.01 && fill >= 0.05 && ht >= 6
} // Canopy induced midflame windspeed adjustment factor

function windSpeedAdjustmentFactor (cover, ht, fill) {
  let waf = 1

  if (sheltersFuelFromWind(cover, ht, fill)) {
    waf = 0.555 / (Math.sqrt(fill * ht) * Math.log((20 + 0.36 * ht) / (0.13 * ht)))
  }

  return fraction(waf)
}

/**
 * @file Exported WFSP chaparral dynamic fuel equations
 * as described by Rothermel and Philpot (1973)
 * and as implemented by BehavePlus V6.
 * @version 0.1.0
 * @copyright Systems for Environmental Management 2020
 * @author Collin D. Bevins
 * @license MIT
 */
const TypeChamise = 'chamise'
const TypeMixedBrush = 'mixedBrush'
const Types = [TypeChamise, TypeMixedBrush]
/**
 * Estimates the chaparral age (years since last burned)
 * from the chaparral fuel depth and fuel type.
 *
 *  @param {number} depth - Chaparral fuel depth (ft+1)
 *  @param {string} type -  Chaparral fuel type ['chamise' | 'mixedBrush']
 *  @returns {number} Estimated chaparral age (years since last burned).
 */

function age (depth, type) {
  if (type === TypeChamise) {
    return Math.exp(3.912023 * Math.sqrt(depth / 7.5))
  }

  if (type === TypeMixedBrush) {
    return Math.exp(3.912023 * Math.sqrt(depth / 10))
  }

  return 0
}
/**
 * Estimates the chaparral fuel depth from its age and type.
 *
 * @param {number} age
 * @param {string} type  One of 'chamise' or 'mixedBrush'
 * @returns {number} Estimated fuel bed depth (ft+1)
 */

function fuelDepth (age, type) {
  // Prevent values of age < 1 from increasing the depth!
  const x = Math.log(Math.max(age, 1.1)) / 3.912023
  return type === TypeChamise ? 7.5 * x * x : 10 * x * x // type === TypeMixedBrush
}
/**
 *  Estimates the total chaparral fuel load from age and type.
 *
 * NOTE - Rothermel & Philpot (1973) used a factor of 0.0315 for chamise age,
 * while Cohen used 0.0347 in FIRECAST.  According to Faith Ann Heinsch:
 * <i>We are going to use Cohen’s calculation from FIRECAST. The change has to do
 * with the fact that we are creating a proxy age from fuel bed depth rather than
 * using an entered age. He had to make some corrections for that assumption.</i>
 *
 *  @param {number} age - Chaparral age (years since last burned)
 *  @param {string} type -  Chaparral fuel type ['chamise' | 'mixedBrush']
 *  @returns {number} Total fuel load (lb+1 ft-2)
 */

function totalLoad (age, type) {
  // Total load in tons per acre
  let tpa = 0

  if (type === TypeChamise) {
    // const chamise1 = 0.0315   // Chamise load factor from Rothermel & Philpot (1973)
    const chamise2 = 0.0347 // Chamise load factor from Cohen's FIRECAST code

    tpa = age / (1.4459 + chamise2 * age)
  } else if (type === TypeMixedBrush) {
    tpa = age / (0.4849 + 0.017 * age)
  } // Return total load in lb/ft2

  return tpa * 2000 / 43560
}
/**
 * Dead fuel fraction from age for AVERAGE mortality level
 *
 * @param {number} age - Chaparral age (years since last burned)
 * @returns {number} Dead fuel fraction assuming avereage mortality.
 */

function deadFractionAverageMortality (age) {
  return fraction(0.0694 * Math.exp(0.0402 * age))
}
/**
 * Dead fuel fraction from age for SEVERE mortality level
 *
 * @param {number} age - Chaparral age (years since last burned)
 * @returns {number} Dead fuel fraction assuming severe mortality.
 */

function deadFractionSevereMortality (age) {
  return fraction(0.1094 * Math.exp(0.0385 * age))
}
/**
 *  Estimates chaparral dead fuel load.
 *
 * @param {number} totalFuelLoad Total chaparral fuel load (lb+1 ft-2)
 * @param {*} deadFuelFraction Dead fuel fraction (fraction)
 * @returns {number} Chaparral dead fuel load (lb+1 ft-2)
 */

function deadLoad (totalFuelLoad, deadFuelFraction) {
  return positive(totalFuelLoad * deadFuelFraction)
}
/**
 * @param {number} totalFuelLoad Total chaparral fuel load (lb+1 ft-2)
 * @param {*} deadFuelFraction Dead fuel fraction (fraction)
 * @returns {number} The load (lb+1 ft-2)
 * of the dead fine (0 to 0.25 inch diameter) chaparral stem wood
 * as per Rothermel and Philpot 1973 Figure 1.
 */

function deadClass1Load (totalFuelLoad, deadFuelFraction) {
  return positive(totalFuelLoad * 0.347 * deadFuelFraction)
}
/**
 *  Estimates chaparral small (0.25-0.5 inch diameter) dead fuel load.
 *
 * @param {number} totalFuelLoad Total chaparral fuel load (lb+1 ft-2)
 * @param {*} deadFuelFraction Dead fuel fraction (fraction)
 * @returns {number} The load (lb+1 ft-2)
 * of the dead small (0.25 to 0.5 inch diameter) chaparral stem wood
 * as per Rothermel and Philpot 1973 Figure 1.
 */

function deadClass2Load (totalFuelLoad, deadFuelFraction) {
  return positive(totalFuelLoad * 0.364 * deadFuelFraction)
}
/**
 * @param {number} totalFuelLoad Total chaparral fuel load (lb+1 ft-2)
 * @param {*} deadFuelFraction Dead fuel fraction (fraction)
 * @returns {number} The load (lb+1 ft-2)
 * of the dead medium (0.5 to 1 inch diameter) chaparral stem wood
 * as per Rothermel and Philpot (1973) Figure 1.
 */

function deadClass3Load (totalFuelLoad, deadFuelFraction) {
  return positive(totalFuelLoad * 0.207 * deadFuelFraction)
}
/**
 * Estimates chaparral large (1 to 3 inch diameter) dead fuel load.
 *
 * Note that the factor of 0.082 varies from the Rothermel & Philpot
 * Figure 1 value of .085, because their factors totaled 1.03 instead of 1.
 *
 * @param {number} totalFuelLoad Total chaparral fuel load (lb+1 ft-2)
 * @param {*} deadFuelFraction Dead fuel fraction (fraction)
 * @returns {number} The load (lb+1 ft-2)
 * of the dead large (1 to 3 inch diameter) chaparral stem wood
 * as per Rothermel and Philpot (1973) Figure 1.
 */

function deadClass4Load (totalFuelLoad, deadFuelFraction) {
  return positive(totalFuelLoad * 0.082 * deadFuelFraction)
}
/**
 *  Estimates chaparral live fuel load.
 *
 * @param {number} totalFuelLoad Total chaparral fuel load (lb+1 ft-2)
 * @param {*} deadFuelFraction Dead fuel fraction (fraction)
 * @returns {number} Chaparral live fuel load (lb+1 ft-2)
 */

function liveLoad (totalFuelLoad, deadFuelFraction) {
  return positive(totalFuelLoad * (1 - deadFuelFraction))
}
/**
 *  Estimates live fine (0 to 0.25 inch diameter) chaparral stem wood fuel load.
 *
 * @param {number} totalFuelLoad Total chaparral fuel load (lb+1 ft-2)
 * @param {*} deadFuelFraction Dead fuel fraction (fraction)
 * @returns {number} The load (lb+1 ft-2)
 * of the live fine (0 to 0.25 inch diameter) chaparral stem wood
 * as per Rothermel and Philpot (1973) Figure 1.
 */

function liveClass1Load (totalFuelLoad, deadFuelFraction) {
  return positive(totalFuelLoad * (0.2416 - 0.256 * deadFuelFraction))
}
/**
 *  Estimates live small (0.25 to 0.5 inch diameter) chaparral stem wood fuel load.
 *
 * @param {number} totalFuelLoad Total chaparral fuel load (lb+1 ft-2)
 * @param {*} deadFuelFraction Dead fuel fraction (fraction)
 * @returns {number} The load (lb+1 ft-2)
 * of the live small (0.25 t0 0.5 inch diameter) chaparral stem wood
 * as per Rothermel and Philpot (1973) Figure 1.
 */

function liveClass2Load (totalFuelLoad, deadFuelFraction) {
  return positive(totalFuelLoad * (0.1918 - 0.256 * deadFuelFraction))
}
/**
 *  Estimates live medium (0.5 to 1 inch diameter) chaparral stem wood fuel load.
 *
 * @param {number} totalFuelLoad Total chaparral fuel load (lb+1 ft-2)
 * @param {*} deadFuelFraction Dead fuel fraction (fraction)
 * @returns {number} The load (lb+1 ft-2)
 * of the live medium (0.5 to 1 inch diameter) chaparral stem wood
 * as per Rothermel and Philpot (1973) Figure 1.
 */

function liveClass3Load (totalFuelLoad, deadFuelFraction) {
  return positive(totalFuelLoad * (0.2648 - 0.05 * deadFuelFraction))
}
/**
 *  Estimates live large (1 to 3 inch diameter) chaparral stem wood fuel load.
 *
 * Modified so that thisLoad = live load - (liveLeaf + liveFine + liveSmall + liveMedium)
 *
 * @param {number} totalFuelLoad Total chaparral fuel load (lb+1 ft-2)
 * @param {*} deadFuelFraction Dead fuel fraction (fraction)
 * @returns {number} The load (lb+1 ft-2)
 * of the live large (1 to 3 inch diameter) chaparral stem wood
 * as per Rothermel and Philpot (1973) Figure 1.
 */

function liveClass4Load (totalFuelLoad, deadFuelFraction) {
  const liveLoad = totalFuelLoad * (1 - deadFuelFraction)
  const l1 = liveClass1Load(totalFuelLoad, deadFuelFraction)
  const l2 = liveClass2Load(totalFuelLoad, deadFuelFraction)
  const l3 = liveClass3Load(totalFuelLoad, deadFuelFraction)
  const l5 = liveClass5Load(totalFuelLoad, deadFuelFraction)
  return positive(liveLoad - l1 - l2 - l3 - l5) // return Calc.positive(totalFuelLoad * (0.1036 - 0.114 * deadFuelFraction))
}
/**
 *  Estimates live chaparral leaf fuel load.
 *
 * @param {number} totalFuelLoad Total chaparral fuel load (lb+1 ft-2)
 * @param {*} deadFuelFraction Dead fuel fraction (fraction)
 * @returns {number} The load (lb+1 ft-2)
 * of the live chaparral leaf
 * as per Rothermel and Philpot (1973) Figure 1.
 */

function liveClass5Load (totalFuelLoad, deadFuelFraction) {
  return positive(totalFuelLoad * (0.1957 - 0.305 * deadFuelFraction))
}

/**
 * @file Exported WFSP compass functions as implemented by BehavePlus v6.
 * @version 0.1.0
 * @copyright Systems for Environmental Management 2020
 * @author Collin D. Bevins <cbevins@montana.com>
 * @license MIT
 */

/**
 * Constrain compass degrees to the azimuth range [0 <= degrees < 360].
 *
 * @param float degrees The compass azimuth (degrees).
 *
 * @return float The compass azimuth constrained to the range [0 <= azimuth < 360] degrees.
 */
function constrain (degrees) {
  while (degrees >= 360) {
    degrees -= 360
  }

  while (degrees < 0) {
    degrees += 360
  }

  return degrees
}
/**
 * Calculate compass degrees (azimuth, clockwise from north) from radians.
 *
 * @param float radians Compass azimuth expressed in radians.
 *
 * @return float Compass azimuth expressed in degrees.
 */

function degrees (radians) {
  return radians * 180 / Math.PI
}
function diff (x, y) {
  return constrain(x - y)
}
/**
 * Get the opposite azimuth from degrees.
 *
 * @param float deg A compass azimuth (degrees).
 *
 * @return float The opposite compass azimuth from dgrees.
 */

function opposite (degrees) {
  return constrain(degrees - 180)
}
/**
 * Calculate the radians of the compass azimuth (clockwise from north).
 *
 * @param float degrees  Compass azimuth (degrees clockwise from north).
 *
 * @return float The compass azimuth expressed in radians.
 */

function radians (degrees) {
  return degrees * Math.PI / 180
}
/**
 * Calculate the slope steepness in degrees from the slope vertical rise / horizontal reach ratio.
 *
 * @param float $ratio Ratio of the slope vertical rise / horizontal reach (fraction).
 *
 * @return float Slope steepness expressed in degrees.
 */

function slopeDegrees (ratio) {
  const radians = Math.atan(ratio)
  return degrees(radians)
}
/**
 * Calculate slope steepness degrees from map measurements.
 *
 * @param float $mapScale Map sacle factor (Greater than 1, i.e., 24000)
 * @param float $contourInterval Map contour interval (in same units-of-measure as $distance)
 * @param float $contours Number of contours crossed in the measurement
 * @param float $mapDistance Map distance covered in the measurement
 *
 * @return float Slope steepness degrees
 */

function slopeDegreesMap (mapScale, contourInterval, contours, mapDistance) {
  const ratio = slopeRatioMap(mapScale, contourInterval, contours, mapDistance)
  return slopeDegrees(ratio)
}
/**
 * Calculate the slope vertical rise / horizontal reach ratio from its steepness in degrees.
 *
 * @param float $degrees  Slope steepness in degrees.
 *
 * @return float Slope vertical rise / horizontal reach ratio (fraction).
 */

function slopeRatio (degrees) {
  const rad = radians(constrain(degrees))
  return Math.tan(rad)
}
/**
 * Calculate slope steepness ratio from map measurements.
 *
 * @param float $mapScale Map sacle factor (Greater than 1, i.e., 24000)
 * @param float $contourInterval Map contour interval (in same units-of-measure as $distance)
 * @param float $contours Number of contours crossed in the measurement
 * @param float $mapDistance Map distance covered in the measurement
 *
 * @return float Slope steepness ratio
 */

function slopeRatioMap (mapScale, contourInterval, contours, mapDistance) {
  const reach = mapScale * mapDistance
  const rise = contours * contourInterval
  return reach <= 0 ? 0 : rise / reach
}
function sum$1 (x, y) {
  return constrain(x + y)
}

/**
 * @file Exported WFSP crown fire functions
 * @version 0.1.0
 * as described by Rothermel () and by Scott & Reinhardt ()
 * and as implemented by BehavePlus v6.
 * @copyright Systems for Environmental Management 2020
 * @author Collin D. Bevins <cbevins@montana.com>
 * @license MIT
 */
const ACTIVE = 'Active'
const CONDITIONAL = 'Conditional'
const PASSIVE = 'Passive'
const SURFACE = 'Surface'
const InitiationTypes = [ACTIVE, CONDITIONAL, PASSIVE, SURFACE]
/**
 * Calculate the crown fire active ratio.
 *
 * @param rActive Actual active crown fire spread rate (ft+1 min-1)
 * @param rPrime Crown spread rate required to maintain active crowning (ft+1 min-1)
 * @return Scott & Reinhardt's active crowning ratio.
 */

function activeRatio (rActive, rPrime) {
  return rPrime <= 0 ? 0 : rActive / rPrime
}
/**
 * Crown fire area per Rothermel (1991) equation 11 (p 16)
 *
 * @param dist Crown fire spread distance (ft+1)
 * @param lwr Crown fire length-to-width ratio
 * @return Crown fire area (ft+2)
 */

function area (dist, lwr) {
  return Math.PI * dist * dist / (4 * lwr)
}
function canTransition (transRatio) {
  return transRatio >= 1
}
/**
 * Calculates the crown fraction burned as per Scott & Reinhardt (2001).
 *
 * @param rSurface Actual surface fire spread rate [Rsurface] (ft+1 min-1).
 * @param rInit Surface fire spread rate required to
 *  initiate torching/crowning [R'initiation] (ft+1 min-1).
 * @param rSa Surface fire spread rate [R'sa] (ft+1 min-1)
 *   at which the active crown fire spread rate is fully achieved
 *   and the crown fraction burned is 1.
 * @return The crown fraction burned (fraction).
 */

function crownFractionBurned (rSurface, rInit, rSa) {
  const numer = rSurface - rInit // Rsurface - R'init

  const denom = rSa - rInit // R'sa - R'init

  return fraction(divide(numer, denom))
}
/**
 * Calculate the Scott & Reinhardt 'crowning index' (O'active),
 * the 20-ft wind speed at which the crown canopy becomes fully available
 * for active fire spread (and the crown fraction burned approaches 1).
 *
 * @param oActive Open wind speed sufficient for active xcrown fire (ft+1 min-1)
 * @return The Scott & Reinhardt Crowning Index (km+1 h-1).
 */

function crowningIndex (oActive) {
  return oActive / 54.680665 // CI in km/h
}
/**
 *
 * @param crownHpua Crown fire (surface plus canopy fuel) heat per unit area (Btu+1 ft-2)
 * @param rActive Active crown fire spread rate (ft+1 min-1)
 * @return Active crown fire fireline intensity (BTU+1 ft-1 s-1)
 */

function fliActive (crownHpua, rActive) {
  return rActive / 60 * crownHpua
}
function fliFinal (rFinal, cfb, cpyHpua, surfHpua) {
  return rFinal * (surfHpua + cfb * cpyHpua) / 60
}
/**
 * Calculate the critical surface fire intensity (I'initiation)
 * sufficient to drive off canopy foliar moisture and initiate a
 * passive or active crown fire.
 *
 * This is Scott & Reinhardt (2001) equation 11 (p 13).
 *
 * @param folMois Canopy foliar moisture content (ratio).
 * @param cpyBase Crown canopy base height (ft+1).
 * @return The critical surface fireline intensity (btu+1 ft-1 s-1)
 *  required to initiate a passive or active crown fire.
 */

function fliInit (folMois, cpyBase) {
  const fmc = Math.max(30, 100 * folMois) // convert to percent with 30% min

  const cbh = Math.max(0.1, 0.3048 * cpyBase) // convert to meters with 10 cm min

  const kwm = Math.pow(0.01 * cbh * (460 + 25.9 * fmc), 1.5) // (kW/m)

  return kwm * 0.288672 // return as Btu/ft/s
}
/**
 * Calculate Thomas's (1963) flame length (ft+1) given a fireline intensity.
 *
 * @param fli Fireline intensity (Btu+1 ft-1 s-1).
 * @return Thomas' (1963) flame length (ft+1).
 */

function flameLengthThomas (fli) {
  return fli <= 0 ? 0 : 0.2 * Math.pow(fli, 2 / 3)
} // Active crown fire heat per unit area,
// sum of the surface fire HPUA and the entire active canopy HPUA
// (i.e., the canopy load * canopy heat content,
// and NOT the canopy fuel model 10 HPUA)

function hpuaActive (surfHpua, cpyHpua) {
  return surfHpua + cpyHpua
}
function isActive (transRatio, activeRatio) {
  return type(transRatio, activeRatio) === ACTIVE
}
function isCrown (transRatio, activeRatio) {
  const fireType = type(transRatio, activeRatio)
  return fireType === ACTIVE || fireType === PASSIVE
}
function isConditional (transRatio, activeRatio) {
  return type(transRatio, activeRatio) === CONDITIONAL
}
function isPassive (transRatio, activeRatio) {
  return type(transRatio, activeRatio) === PASSIVE
}
function isSurface (transRatio, activeRatio) {
  return type(transRatio, activeRatio) === SURFACE
}
function isPlumeDominated (powerRatio) {
  return powerRatio >= 1
}
function isWindDriven (powerRatio) {
  return powerRatio < 1
}
/**
 * Calculate the crown fire length-to-width ratio given the 20-ft
 * wind speed (Rothermel 1991, Equation 10, p16).
 *
 * @param wspd20 Wind speed at 20-ft (ft+1 min-1).
 * @return The crown fire length-to-width ratio (ratio).
 */

function lengthToWidthRatio (wspd20) {
  return 1 + 0.125 * (wspd20 / 88) // Wind speed must be in miles per hour
}
/**
 * Calculate the Scott & Reinhardt 'crowning index' (O'active),
 * the 20-ft wind speed at which the crown canopy becomes fully available
 * for active fire spread (and the crown fraction burned approaches 1).
 *
 * @param cpyBulk Crown canopy bulk density (btu+1 ft-3).
 * @param crownRxi Crown fire (fuel model 10) reaction intensity (btu+1 ft-2 min-1).
 * @param crownSink Crown fire (fuel model 10) heat sink (btu+1 ft-3).
 * @param phis Slope coefficient (0 for crown fire)
 * @return The O`active wind speed (ft+1 min-1) or Infinity.
 */

function oActive (cpyBulk, crownRxi, crownSink, phis) {
  if (cpyBulk === 0 || crownSink === 0) return Infinity // In native units

  const cbd = 16.0185 * cpyBulk // Convert from lb/ft3 to kg/m3

  const ractive = 3.28084 * (3 / cbd) // R'active, ft/min

  const r10 = ractive / 3.34 // R'active = 3.324 * r10

  const pflux = 0.048317062998571636 // Fuel model 10 actual propagating flux ratio

  const ros0 = crownRxi * pflux / crownSink
  if (ros0 - 1 - phis === 0) return Infinity
  const windB = 1.4308256324729873 // Fuel model 10 actual wind factor B

  const windBInv = 1 / windB // Fuel model 10 actual inverse of wind factor B

  const windK = 0.0016102128596515481 // Fuel model 10 actual K = C*pow((beta/betOpt),-E)

  const a = (r10 / ros0 - 1 - phis) / windK
  if (a === 0) return Infinity
  const uMid = Math.pow(a, windBInv)
  const u20 = uMid / 0.4
  return u20
}
/**
 * Crown fire perimeter per Rothermel (1991) equation 13 (p 16).
 *
 * @param dist Crown fire spread distance (ft+1)
 * @param lwr Crown fire length-to-width ratio
 * @return Crown fire perimeter (ft+1)
 */

function perimeter (dist, lwr) {
  return 0.5 * Math.PI * dist * (1 + 1 / lwr)
}
/**
 * Calculate the crown fire power-of-the-fire(ft+11 lb+1 ft-2 s-1).
 *
 * @param fliActive Crown fire active fireline intensity (Btu+1 ft-1 s-1).
 * @return Rothermel's power of the fire (ft+1 lb+1 ft-2 s-1).
 */

function powerOfTheFire (fliActive) {
  return fliActive / 129
}
/**
 * Calculate the crown fire power-of-the-wind (ft+1 lb+1 ft-2 s-1).
 *
 * See Rothermel (1991) equations 6 & 7 (p 14).
 *
 * @param wspd20 Wind speed at 20-ft (ft+1 min-1).
 * @param rActive Actiuve crown fire spread rate (ft+1 min-1).
 * @return Rothermel's power of the wind (ft+1 lb+1 ft-2 s-1).
 */

function powerOfTheWind (wspd20, rActive) {
  // Difference must be in ft+1 s-1
  const diff = positive((wspd20 - rActive) / 60)
  return 0.00106 * diff * diff * diff
}
/**
 * Calculate the active crown fire spread rate at head [Ractive] (ft+1 min-1)
 * given the corresponding standard fuel model 10 spread rate at head.
 *
 * This is the crown fire spread rate per Rothermel (1991), and which
 * Scott & Reinhardt term `Ractive`
 *
 * @param fm10Ros Standard fuel model 10 spread rate at head (ft+1 min-1).
 *
 * @return The spread rate at head (ft+1 min-1) of the active crown fire.
 */

function rActive (fm10ros) {
  return 3.34 * fm10ros
}
/**
 * Scott & Reinhardt (2005) final spread rate based on FAH.
 *
 * @param rSurface
 * @param rActive
 * @param cfb Crown fraction burned (fraction).
 * @return float Final crown fire spread rate (ft+1 min-1)
 */

function rFinal (rSurface, rActive, cfb) {
  return rSurface + cfb * positive(rActive - rSurface)
}
/**
 * Calculate the critical surface fire spread rate (R'initiation)
 * sufficient to initiate a passive or active crown fire.
 *
 * This is Scott & Reinhardt (2001) equation 12 (p 13).
 *
 * @param critSurfFli Critical surface fireline intensity (btu_1 ft-1 s-1).
 * @param surfHpua Surface fire heat per unit area (Btu+1 ft-2).
 * @return Scott & Reinhardt's critical surface fire spread rate
 *  [R'initiation] (ft+1 min-1)
 */

function rInit (critSurfFli, surfHpua) {
  return surfHpua <= 0 ? 1.0e12 : 60 * critSurfFli / surfHpua
}
/**
 * Calculate R'active, the critical crown (minimum) rate of spread for active crowning.
 *
 * Scott & Reinhardt (2001) equation 14, p 14.
 *
 * @param cpyBulk Crown canopy bulk density (lb+1 ft-3).
 * @return The critical crown fire spread rate (ft+1 min-1).
 */

function rPrimeActive (cpyBulk) {
  const cbdSi = 16.0184663678 * cpyBulk // convert to Kg/m3

  const rosSi = cbdSi <= 0 ? 0 : 3 / cbdSi // m/min

  const rosFpm = rosSi * 3.2808399 // return as ft/min

  return rosFpm
}
/**
 * Scott & Reinhardt (2001) R'sa, the theoretical surface fire spread rate
 * when the 20-ft wind speed equals O'active
 *
 * @param oActive Critical open wind speed (ft+1 min-1) for sustaining fully active crown fire
 * @param surfRos0 Surface fire no-wind no-slope spread rate (ft+1 min-1)
 * @param surfWaf Surface fuel's wind speed adjustment factor to apply to oActive
 * @param surfWindB Surface fuel's wind factor B
 * @param surfWindK Surface fuel's wind factor K
 * @param surfPhiS Surface fuel's slope coefficient
 * @return R'sa The theoretical surface fire spread rate
 * when the 20-ft wind speed equals O'active
 */

function rSa (oActive, surfRos0, surfWaf, surfWindB, surfWindK, surfPhiS) {
  if (oActive === Infinity) return Infinity
  const mwspd = surfWaf * oActive
  const surfPhiW = mwspd <= 0 ? 0 : surfWindK * Math.pow(mwspd, surfWindB)
  return surfRos0 * (1 + surfPhiW + surfPhiS)
}
/**
 * Calculate the crown fire transition ratio.
 *
 * @param surfFli Actual surface fire fireline intensity (Btu+1 ft-1 s-1).
 * @param iInit Critical surface fire fireline intensity [I'initiation]
 * required to initiate active or passive crowning (Btu+1 ft-1 s-1).
 * @return Rothermel's crown fire transition ratio.
 */

function transitionRatio (surfFli, fliInit) {
  return fliInit <= 0 ? 0 : surfFli / fliInit
}
/**
 * Calculate the final fire type.
 *
 *  <table>
 *    <tr>
 *      <td> Transition </td>
 *        <td colspan='2'> Active Ratio </td>
 *    </tr>
 *    <tr>
 *        <td> Ratio </td>
 *        <td> &lt 1 </td>
 *        <td> &gt = 1 </td>
 *    </tr>
 *    <tr>
 *        <td> &lt 1 </td>
 *        <td> 0 : Surface Fire </td>
 *        <td> 2 : Conditional Active Crown Fire </td>
 *    </tr>
 *    <tr>
 *        <td> &gt = 1 </td>
 *        <td> 1 : Passive Crown Fire </td>
 *        <td> 3 : Active Crown Fire </td>
 *    </tr>
 *  </table>
 *
 * @param transRatio The ratio of the surface fireline intensity to the
 * critical surface fireline intensity.
 * @param activeRatio The ratio of the active crown fire spread rate to the
 * critical crown fire spread rate
 * @return One of the following codes:
 *  - 'surface fire' indicates a surface fire with no torching or crowning
 *      (transition ratio < 1 && active ratio < 1)
 * - 'passive crown fire' indicates a passive/torching crown fire
 *      (transition ratio >= 1 && active ratio < 1)
 * - 'conditional surface fire' indicates a surface fire that could conditionally
 *      transition to an active crown fire
 *      (transition ratio < 1 && active ratio >= 1)
 * - 'active crown fire' indicates an active crown fire
 *      (transition ratio >= 1 && active ratio >= 1)
 */

function type (transRatio, activeRatio) {
  if (transRatio < 1) {
    return activeRatio < 1 ? SURFACE : CONDITIONAL
  } else {
    // ( transRatio >= 1.0 )
    return activeRatio < 1 ? PASSIVE : ACTIVE
  }
}

/**
 * Calculates crown firebrand dropout altitude and distance,
 * drift distance, and total flat terrain spot distance.
 *
 * Thin wrapper around dist() that performs input/output
 * units conversions native to BPX.
 *
 * @param {real} canopyHt Average crown top height of forest cover (ft)
 * @param {real} crownFli Fire intensity (Btu/ft/s)
 * @param {real} ws20 Wind speed at canopy top, (ft/min)
 *
 * @return {object}
 *  zdrop: firebrand dropout plume coordinate height (ft)
 *  xdrop: firebrand dropout plume coordinate horizontal distance (ft)
 *  xdrift: firebrand down-wind drift horizontal distance (ft)
 *  xspot:  firebrand down-wind spotting distance on flat terrain (ft)
 *  layer: plume profile layer where dropout occurs
 */

function flatDistance (canopyHt, ws20, crownFli) {
  const fpm = 3.2808
  const htop = canopyHt / fpm
  const fikwpm = 3.46414 * crownFli // Anemometer wind speed must be km/h

  const uan = 1.60934 * ws20 / 88 // Anemometer height (m)

  const anem = 6.096 // utop is wind speed in m/s

  const utop = windSpeedAtCanopyTop(htop, uan, anem)
  const diam = 1

  const _dist = dist(htop, fikwpm, utop, diam)
  const _dist2 = _slicedToArray(_dist, 5)
  const z = _dist2[0]
  const x = _dist2[1]
  const drift = _dist2[2]
  const spot = _dist2[3]
  const layer = _dist2[4]

  return {
    zdrop: fpm * z,
    xdrop: fpm * x,
    xdrift: fpm * drift,
    xspot: fpm * spot,
    layer: layer
  }
}
/**
 * Simply returns the 'drift' property from the 'firebrand' object.
 *
 * @param {real} firebrandObj Object returned by flatDistance().
 * @return {real} Firebrand down-wind drift horizontal distance (ft)
 */

function xdrift (firebrandObj) {
  return firebrandObj.xdrift
}
/**
 * Simply returns the 'xdrop' property from the 'firebrand' object.
 *
 * @param {real} firebrandObj Object returned by flatDistance().
 * @return {real} Firebrand dropout plume coordinate horizontal distance (ft)
 */

function xdrop (firebrandObj) {
  return firebrandObj.xdrop
}
/**
 * Simply returns the 'spot' property from the 'firebrand' object.
 *
 * @param {real} firebrandObj Object returned by flatDistance().
 * @return {real} Firebrand down-wind spotting distance on flat terrain (ft)
 */

function xspot (firebrandObj) {
  return firebrandObj.xspot
}
/**
 * Simply returns the 'zdrop' property from the 'firebrand' object.
 *
 * @param {real} firebrandObj Object returned by flatDistance().
 * @return {real} Firebrand dropout plume coordinate height (ft)
 */

function zdrop (firebrandObj) {
  return firebrandObj.zdrop
}
/**
 * Adapted from Albini's MS FORTRAN PROGRAM DIST().
 *
 * @param {real} htop Average crown top height of forest cover (m)
 * @param {real} fikwpm Fire intensity (kW/m) (must be > 1000 kW/m)
 * @param {real} utop Wind speed at canopy top, (m/s)
 * @param {real} diam Firebrand diameter when it reaches the surface (mm)
 *
 * @return {array} [fbHeight, fbDist, fbDrift, flatSpotDist, layer], where
 *  dbHeight is the firebrand dropout plume coordinate height (m)
 *  dbDist is the firebrand dropout plume coordinate distance (m)
 *  dbDrift is the firebrand down-wind drift distance (m)
 *  flatSpotDist is the firebrand down-wind spotting distance on flat terrain (m)
 *  layer is the plume profile layer
 */

function dist (htop, fikwpm, utop, diam) {
  // flame = flame height above the canopy top (m)
  const flame = flameHeightAlbini(fikwpm, utop, htop)

  if (flame <= 0) {
    return [0, 0, 0, 0, 0]
  } // if (ido===2) fikwpm = fireIntensityAlbini(flame, utop, htop)
  // hf = normalized flame height above the canopy top (dl)

  const hf = flame / htop // uc = normalized wind speed at the crown top

  const g = 9.82 // Acceleration of gravity, m / s^2

  const wn = Math.sqrt(g * htop)
  const uc = utop / wn // dlosmm = ember diameter loss from the top of the plume till it hits the surface

  const dlosmm = 0.064 * htop // Display inputs and intermediates derived so far:
  // console.log('Mean height of forest (htop)', htop, '(m)')
  // console.log('Mean wind speed at anemometer height', uan, '(km/h)')
  // console.log('Mean height of flame above tops', flame, '(m)')
  // console.log('Fire intensity [input or calculated]', fikwpm, '(kW/m)')
  // console.log('Anemometer height', anem, '(m)')
  // console.log('hf (flame ht / canopy ht)', hf, '(dl)')
  // console.log('utop (wind speed at crown top)', utop, '(dl)')
  // console.log('uc (normalized wind at crown top)', uc, '(dl)')
  // console.log('wn (sqrt( g * htop ))', wn)
  // console.log('Firebrand alighting diameter', diam, '(mm)')
  // console.log('dlosmm (Ember diam loss=0.064 * htop)', dlosmm, '(mm)')
  // dhitmm = ember diameter when it hits the ground (mm)

  const dhitmm = diam // dtopmm = ember diameter when it reaches the top of the plume (mm)

  const dtopmm = dhitmm + dlosmm // eta = 'safety factor' for firebrand diameter on impact (eta > 1.)

  const eta = dtopmm / dlosmm // Determine firebrand dropout location within the plume.  Outputs are:
  //  zdrop = normalized vertical firebrand dropout altitude (dl) (m / htop)
  //  xdrop = corresponding dropout normalized distance down wind (dl) (m / htop)
  //  layer = plume layer where dropout occurs

  const _dropout = dropout(hf, uc, eta)
  const _dropout2 = _slicedToArray(_dropout, 3)
  const zdrop = _dropout2[0]
  const xdrop = _dropout2[1]
  const layer = _dropout2[2] // xdrift = normalized down wind drift distance (dl) (m / htop)

  const xdrift = drift(zdrop, eta, uc) // xspot = normalized total spotting distance on flat terrain (m / htop)

  const xspot = xdrop + xdrift // Convert normalized distances to m

  const fbHeight = zdrop * htop
  const fbDist = xdrop * htop
  const fbDrift = xdrift * htop
  const flatSpotDist = xspot * htop // console.log('Plume Drop-out Layer', layer)
  // console.log('Normalized dropout altitude', zdrop, '(m / htop)')
  // console.log('Normalized dropout distance', xdrop, '(m / htop)')
  // console.log('Normalized drift distance', xdrift, '(m / htop)')
  // console.log('Firebrand Height', fbHeight, '(m)')
  // console.log('Firebrand Distance', fbDist, '(m)')
  // console.log('Firebrand Drift', fbDrift, '(m)')
  // console.log('Flat spot distance',  flatSpotDist, '(m)')

  return [fbHeight, fbDist, fbDrift, flatSpotDist, layer]
}
/**
 * According to Albini:
 * "Calculates normalized down wind drift distance, 'delx',
 * for a firebrand particle injected into log profile wind field at
 * normalized altitude 'zdrop' and entering the canopy with diameter
 * equal to 'eta' times that necessary to reach the surface."
 *
 * Adapted from Frank Albini's 'drift.for' FORTRAN source, SUBROUTINE DRIFT()
 *
 * @param {real} zdrop Normalized firebrand drop-out altitude (dl) (m / htop)
 * @param {real} eta Safety factor (eta>1)
 * @param {real} uc Normalized horizontal wind speed at crown top (dl)
 *
 * @return {real} Normalized down wind firebrand drift distance (m / htop)
 */

function drift (zdrop, eta, uc) {
  const f0 = 1 + 2.94 * zdrop
  const f1 = Math.sqrt(eta / (eta + zdrop))
  const f2 = eta > 0.34 ? Math.sqrt(eta / (eta - 0.34)) : 0
  const f3 = f1 > 0 ? f2 / f1 : 0
  const f2log = f2 > 1 ? Math.log((f2 + 1) / (f2 - 1)) : 0
  const f3log = f3 > 1 ? Math.log((f3 + 1) / (f3 - 1)) : 0
  const F = f3 > 0 ? 1 + Math.log(f0) - f1 + (f3log - f2log) / f3 : 0
  const xdrift = 10.9 * F * uc * Math.sqrt(zdrop + eta)
  return xdrift
}
/**
 * Calculates firebrand drop-out altitude and distance
 *
 * @param {real} hf  Normalized flame height above the canopy top (dl)
 * @param {real} uc Normalized horizontal wind speed at crown top (dl)
 * @param {real} eta Safety factor (eta>1)
 *
 * @returns {array} [zdrop, xdrop, layer], where
 *  zdrop = normalized vertical firebrand dropout altitude (dl) (m / htop)
 *  xdrop = corresponding dropout normalized distance down wind (dl) (m / htop)
 *  layer = plume layer where dropout occurs
 */

function dropout (hf, uc, eta) {
  // Delta x-z iteration factor
  const ds = 0.2 // qfac = constant used to determine sufficient qreq at each layer

  const qfac = uc > 0 ? 0.00838 / (uc * uc) : 0 // Albini's tip()

  const rfc = 1 + 2.94 * hf
  let fm = 0.468 * rfc * Math.log(rfc)
  const fmuf = 1.3765 * (hf + rfc * Math.pow(Math.log(rfc), 2))
  const uf = fmuf / fm
  const ctn2f = rfc - 1 + rfc * Math.pow(Math.log(rfc), 2)
  const tang = 1.4 * hf / (uc * Math.sqrt(ctn2f))
  const ang = Math.atan(tang)
  const wf = tang * uf
  const vf = Math.sqrt(uf * uf + wf * wf)
  const rhof = 0.6
  const bf = fm / (rhof * vf) // end tip()

  let sing = Math.sin(ang)
  let cosg = Math.cos(ang)
  let delx = 0.5 * bf * sing
  let delz = 0.5 * bf * cosg
  const zc2 = hf
  const xc2 = hf / Math.tan(ang)
  const fmf = fm
  const tratf = 2 * fmf / 3
  const fmadd = fm > 0 ? 0.2735 * fm : 0
  const hfarg = 1 + 2.94 * hf
  const fmuadd = 0.3765 * (hf + hfarg * Math.pow(Math.log(hfarg), 2))
  let fmw = fm * wf
  const dmwfac = uc > 0 ? 2 * fmf / (3 * uc * uc) : 0
  let w = wf
  let V = vf
  let z = hf
  let x = xc2 // Level 1

  let q = 0.5 * rhof * wf * wf
  let xb = delx
  let zb = 0 // Level 2

  q = 0.5 * rhof * wf * wf
  xb = xc2 + delx
  zb = zc2 - delz
  let zp = zb
  let xp = xb
  let layer = 2
  let qreq = qfac * (zb + eta)

  if (q <= qreq) {
    // console.log('plume cannot lift a particle large enough to provide the "eta" saftey factor')
    return [0, 0, 0]
  }

  while (true) {
    layer += 1
    const dx = ds * cosg
    const dz = ds * sing
    x = x + dx
    z = z + dz
    const zarg = 1 + 2.94 * z
    fm = 0.34 * zarg * Math.log(zarg) + fmadd
    const fmu = z + 0.34 * zarg * Math.pow(Math.log(zarg), 2) + fmuadd
    const trat = 1 + tratf / fm
    const u = fmu / fm
    fmw = fmw + dmwfac / V * dz
    w = fmw / fm
    V = Math.sqrt(u * u + w * w)
    const b = fm * trat / V
    sing = w / V
    cosg = u / V
    delx = 0.5 * b * sing
    delz = 0.5 * b * cosg
    xb = x + delx
    zb = z - delz
    q = 0.5 * w * w / trat
    qreq = qfac * (zb + eta) // Compare with dist2a_plume.csv
    // console.log(k, q[k], xb[k], zb[k], ang, dx, dz, x, z, zarg)
    // fm, fmu, trat, u, fmw, w, V, b, sing, cosg, delx, delz)

    if (q < qreq) {
      return [zp, xp, layer - 1]
    }

    zp = zb // store as previous layer value

    xp = xb // store as previous layer value

    if (layer > 50000) {
      throw new Error('dropout() exceeded 50000 layers')
    }
  }
}
/**
 * Calculates crown fire intensity from crown fire flame length
 * using Thomas equation.
 *
 * @param {real} flameLength Crown fire flame length (ft)
 * @return {real} Crown fire intensity (btu/ft/s)
 *  (multiply by 3.46414 to obtain kW/m)
 */

function firelineIntensityThomas (flameLength) {
  return flameLength <= 0 ? 0 : Math.pow(5 * flameLength, 3 / 2)
}
/**
 * Estimates crown fire average flame HEIGHT (not length) above canopy top (m)
 *
 * Adapted from Albini's MS FORTRAN FUNCTION HEIGHT().
 *
 * @param {real} fikwpm Fire intensity (kW/m) (must be > 1000 kW/m)
 * @param {real} utop  Mean wind speed at canopy top (m/s)
 * @param {real} htop Average crown top height of forest cover (m)
 * @return {real} Average height of flame above canopy top (m)
 */

function flameHeightAlbini (fikwpm, utop, htop) {
  if (htop * utop <= 0 || fikwpm < 1000) return 0
  const con = 7.791e-3 * fikwpm / (utop * htop)
  let ylow = 1
  let yhigh = Math.exp(con) // As 'con' approaches 780, 'yhigh' approaches Infinity,
  // which causes endless binary seach loop.  So cap it...
  // console.log(`Start flameHeightAlbini(): con=${con}, yhigh=${yhigh}`)

  if (yhigh === Infinity) {
    yhigh = Number.MAX_VALUE // console.log(` RESET: con=${con}, yhigh=${yhigh}`)
  }

  let loop = 1

  while (true) {
    const y = 0.5 * (ylow + yhigh)
    const test = y * Math.log(y)

    if (Math.abs(test - con) <= 1e-6) {
      const height = htop * (y - 1) / 2.94 // console.log(`Loop ${loop} ylow=${ylow}, yhigh=${yhigh}`)

      return height
    }

    loop = loop + 1

    if (loop > 10000) {
      // The following statement should never be executed, but still...
      throw new Error('flameHeightAlbini() binary search endless loop detected')
    }

    if (test >= con) yhigh = y
    if (test < con) ylow = y
  }
}
/**
 * Estimates the mean wind speed at canopy top (m/s)
 *
 * Adapted from Albini's MS FORTRAN PROGRAM DIST() around statements 45 to 50
 *
 * @param {real} htop Average crown top height of forest cover (m)
 * @param {real} uan Measured wind speed at anemometer height (km/h)
 * @param {real} anem Height of measured wind speed (m)
 * @return {real} utop Mean wind speed at canopy top (m/s)
 */

function windSpeedAtCanopyTop (htop, uan, anem) {
  const zonh = htop > 0 ? anem / htop : 0
  const fact = 1 + Math.log(1 + 2.94 * zonh)
  const utop = uan / (3.6 * fact)
  return utop
}

/* eslint-disable no-unused-vars */
// Node updater methods that are handled internally by the Dag
function bind (value) {
  return value
}
function config (value) {
  return value
}
function dangler (value) {
  return value
}
function fixed (value) {
  return value
}
function input (value) {
  return value
}
function link (value) {
  return value
}
/**
 * Callback for Dag.setModule()
 *
 * Notes:
 * - module() is called via Dag.setModules() -> DagDna.setModules() -> DagSetRun.setModules()
 * - The Module values have already been set before module() is called
 * - module() should enabled/disable Nodes and set Link Nodes as appropriate
 * - After returning from module(), DagSetRun.setModules() calls config()
 *
 * @param {Dag} dag  Reference to the DagDna instance
 * @param {string} mode 'cascade', 'independent', or 'none'
 *
 * In 'independent' mode, any two modules are ALWAYS and ONLY linked WHEN they are both active.
 * Thus, if both surfaceFire and crownFire are activate, they are also linked.
 * If crownSpot is then also activated, it is also linked to crownFire and then surfaceFire.
 * This forces the client to select all active modules, just as for BehavePlus for Windows.
 *
 * If mode is 'none', then links are set just like any other configure Node.
 * For example, if the client selects the flanking spread rate, the 'link.fireEllipse'
 * configuration Node becomes 'required', and the client may then choose between
 * 'linkedToSurfaceFire' or 'standAlone'.
 */

function module (dag, mode) {
  if (mode === 'independent') {
    moduleIndependent(dag)
  }
}

function moduleIndependent (dag) {
  const modules = [['surfaceFire', ['surface.primary', 'surface.secondary', 'surface.weighted'], null], ['surfaceSpot', ['spotting.surfaceFire'], 'surfaceFire'], ['crownFire', ['crown.'], 'surfaceFire'], ['crownSpot', ['spotting.crownFire.'], 'crownFire'], ['fireEllipse', ['surface.fire.ellipse.'], 'surfaceFire'], ['fireContain', ['contain'], 'fireEllipse'], ['scorchHeight', ['scorch.'], 'surfaceFire'], ['treeMortality', ['mortality.'], 'scorchHeight'], ['spotting', ['spotting.burningPile', 'spotting.torchingTrees'], null], ['ignitionProbability', ['ignition.'], null]]
  modules.forEach(function (_ref) {
    const _ref2 = _slicedToArray(_ref, 3)
    const name = _ref2[0]
    const prefixes = _ref2[1]
    const linkName = _ref2[2]

    const modNode = dag.get('module.' + name) // *this* module Node

    const active = modNode.value === 'active' // Set up possible linkage

    if (linkName) {
      const linkNode = dag.get('link.' + name)
      linkNode.value = 'standAlone'

      if (active) {
        const linkMod = dag.get('module.' + linkName)

        if (linkMod.value === 'active') {
          // if there is a link module and its active
          linkNode.value = 'linkedTo' + linkName.charAt(0).toUpperCase() + linkName.slice(1) // link to it
        }
      }
    } // Enable/disable this module's Nodes

    prefixes.forEach(function (prefix) {
      dag.node.forEach(function (node) {
        if (node.key.startsWith(prefix)) node.isEnabled = active
      })
    })
  })
}

/**
 * @file Exported WFSP fire ellipse functions
 * as described by Albini (1998) and
 * as implemented by BehavePlus v6.
 * @version 0.1.0
 * @copyright Systems for Environmental Management 2020
 * @author Collin D. Bevins <cbevins@montana.com>
 * @license MIT
 */
/**
 * Calculate the fire ellipse area given its major axis length and
 * length-to-width ratio as per Rothermel (1991) equation 11 on page 16
 * (which ignores backing distance).
 *
 * @param len Total fire ellipse length (arbitrary distance unbits-of-measure).
 * @param lwr Fire ellipse length-to-width ratio (ratio).
 * @return Fire ellipse area (in same distance unitsof-measure as length squared).
 */

function area$1 (len, lwr) {
  return divide(Math.PI * len * len, 4 * lwr)
}
/**
 *  Calculate the fire spread rate (ft+1 min-1) at the ellipse back
 *  given the fire spread rate at ellipse head and fire ellipse length-to-width ratio.
 *
 *  NOTE this differs from FireSpread::spreadRateAtBack() which takes the
 *  length-to-width ratio as the second parameter, rather than ellipse eccentricity.
 *
 * @param spreadRateAtHead Fire spread rate at ellipse head (ft+1 min-1).
 * @param eccentricity Fire ellipse eccentricity (ratio).
 *
 * @return float The fire spread rate at the ellipse back (ft+1 min-1).
 */

function backingSpreadRate (rosHead, eccent) {
  return rosHead * divide(1 - eccent, 1 + eccent)
}
/**
 * Calculate the fire spread rate at 'beta' degrees from the fire ignition point-to-head vector.
 *
 * This calculates the fire spread rate at `beta` degrees from its *point of ignition*,
 * which *is not* the fire rate at `psi` degrees from the center of the ellipse.
 *
 * NOTE this differs from FireSPread::spreadRateATBeta(), which takes the ellipse
 * length-to-width ratio as its second argument.
 *
 * @param betaHead Fire spread vector of interest (degrees clockwise from heading direction).
 * @param rosHead Fire spread rate at the head (ft+1 min-1).
 * @param eccent Fire ellipse eccentricity (ratio).
 *
 * @return float The fire spread rate along the specified vector (ft+1 min-1).
 */

function betaSpreadRate (betaHead, rosHead, eccent) {
  let rosBeta = rosHead // Calculate the fire spread rate in this azimuth
  // if it deviates more than a tenth degree from the maximum azimuth

  if (Math.abs(betaHead) > 0) {
    const rad = radians(betaHead)
    rosBeta = rosHead * (1 - eccent) / (1 - eccent * Math.cos(rad))
  }

  return rosBeta
}
/**
 * Calculate the fire ellipse eccentricity.
 *
 * @param float lwr Fire ellipse length-to-width ratio.
 * @return float The fire ellipse eccentricity (ratio).
 */

function eccentricity (lwr) {
  const x = lwr * lwr - 1
  return x <= 0 || lwr <= 0 ? 0 : Math.sqrt(x) / lwr
}
/**
 * Calculate the fire ellipse expansion rate at the flank.
 *
 * NOTE this differs from backingSpreadRate(), which takes two arguments,
 * the spread rate at head and the ellipse length-to-width ratio.
 *
 * @param rosMinor Fire ellipse expansion rate at its widest point
 * (in arbitrary velocity units-of-measure).
 *
 * @return The fire ellipse spread rate at the flank
 *  (in the same arbitrary velocity units-of-measure as minorAxisExpansionRate).
 */

function flankingSpreadRate (rosMinor) {
  return 0.5 * rosMinor
}
/**
 * Calculate the fire ellipse distance or rate at `F`.
 *
 * @param rosMajor Fire ellipse major axis spread rate or length
 *  (in arbitrary distance or velocity units-of-measure).
 * @return Fire ellipse `F` used to determine spread rates at arbitrary psi.
 */

function fSpreadRate (rosMajor) {
  return 0.5 * rosMajor
}
/**
 * Calculate the fire ellipse distance or rate at `G`.
 *
 * @param rosMajor Fire ellipse major axis spread rate or length
 *  (in arbitrary distance or velcoity units-of-measure).
 *
 * @param rosBack Portion of the total major axis rate or distance
 *  attributable to the backing rate or distance (in the same atbitrary
 *  distance or velcoity units-of-measure as majorAxisRateOrDistance).
 *
 * @return Fire ellipse `G` used to determine spread rates at arbitrary psi.
 */

function gSpreadRate (rosMajor, rosBack) {
  return 0.5 * rosMajor - rosBack
}
/**
 * Calculate the fire ellipse distance or rate at `H`.
 *
 * @param rosMinor Fire ellipse minor axis spread rate or length
 *  (in arbitrary distance or velcoity units-of-measure).
 *
 * @return Fire ellipse `H` used to determine spread rates at arbitrary psi.
 */

function hSpreadRate (rosMinor) {
  return 0.5 * rosMinor
}
/*! \brief Caluclate the fireline intensity at some azimuth.
 */

function fliAtAzimuth (fliHead, rosHead, rosAz) {
  return positive(divide(fliHead * rosAz, rosHead))
}
/**
 * Calculate the fire ellipse expansion rate along its major axis.
 *
 * @param rosHead Fire spread rate at the head of the ellipse
 *  (in arbitrary velocity units-of-measure).
 *
 * @param rosBack Fire spread rate at the back of the ellipse
 *  (in the same velocity units-of-measure as spreadRateAtHead).
 *
 * @return The fire ellipse expansion rate along its major axis
 *  (in the same velocity units-of-measure as spreadRateAtHead).
 */

function majorSpreadRate (rosHead, rosBack) {
  return rosHead + rosBack
}
/**
 * Calculate the fire ellipse expansion rate along its minor axis.
 *
 * @param majorAxisRos Fire ellipse expansion rate along its major axis
 * (in arbitrary velocity units-of-measure).
 *
 * @param lwr The fire ellipse length-to-width ratio.
 *
 * @return The fire ellipse expansion rate along its mino axis
 * (in the same arbitrary velocity units-of-measure as majorAxisExpansionRate).
 */

function minorSpreadRate (rosMajor, lwr) {
  return positive(divide(rosMajor, lwr))
} // Map area

function mapArea (area, mapScale) {
  return positive(divide(area, mapScale * mapScale))
}
/**
 *  Calculate the fire ellipse perimeter from its length and width.
 *
 * @param len Fire ellipse length (arbitrary distance units-of-measure).
 * @param wid Fire ellipse width (arbitrary distance units-of-measure).
 *
 * @return float The fire ellipse perimeter (in same distance units-of-measure as length).
 */

function perimeter$1 (len, wid) {
  const a = 0.5 * len
  const b = 0.5 * wid
  const xm = a + b <= 0 ? 0 : (a - b) / (a + b)
  const xk = 1 + xm * xm / 4 + xm * xm * xm * xm / 64
  return Math.PI * (a + b) * xk
}
function psiFromTheta (thetaFromHead, rosF, rosH) {
  if (rosF <= 0 || rosH <= 0 || thetaFromHead <= 0) {
    return 0
  }

  const thetaRadians = radians(thetaFromHead)
  const tanPsiRadians = Math.tan(thetaRadians) * rosF / rosH
  let psiRadians = Math.atan(tanPsiRadians) // psiRadians += ( psiRadians < 0) ? pi : 0
  // psiradians += ( thetaRadians > pi) ? pi : 0
  // Quadrant adjustment

  if (thetaRadians <= 0.5 * Math.PI) ; else if (thetaRadians > 0.5 * Math.PI && thetaRadians <= 1.5 * Math.PI) {
    psiRadians += Math.PI
  } else if (thetaRadians > 1.5 * Math.PI) {
    psiRadians += 2 * Math.PI
  } // Convert psi radians to degrees

  return degrees(psiRadians)
}
/**
 * Calculate the fire spread rate at 'psi' degrees from the fire ellipse center-to-head vector.
 *
 * This calculates the fire spread rate at `psi` degrees from its *ellipse center* to the ellipse head,
 * which *is not* the fire rate at `beta` degrees from the point of ignition.
 *
 * @param psiHead The fire spread vector of interest (degrees clockwise from heading direction).
 * @param rosF Fire ellipse expansion rate (ft+1 min-1) at ellipse point F.
 * @param rosG Fire ellipse expansion rate (ft+1 min-1) at ellipse point G.
 * @param rosH Fire ellipse expansion rate (ft+1 min-1) at ellipse point H.
 *
 *  @return The fire spread rate along the specified vector (ft+1 min-1).
 */

function psiSpreadRate (psiHead, rosF, rosG, rosH) {
  let rosPsi = 0

  if (rosF * rosG * rosH > 0) {
    const radians$1 = radians(psiHead)
    const cosPsi = Math.cos(radians$1)
    const cos2Psi = cosPsi * cosPsi
    const sin2Psi = 1 - cos2Psi
    const term1 = rosG * cosPsi
    const term2 = rosF * rosF * cos2Psi
    const term3 = rosH * rosH * sin2Psi
    rosPsi = term1 + Math.sqrt(term2 + term3)
  }

  return rosPsi
}
/**
 * Calculate the distance given the velocity and elapsed time.
 *
 * @param rate Velocity
 * @param time Elapsed time
 * @return Distance traveled
 */

function spreadDistance (rate, time) {
  return rate * time
}
function thetaFromBeta (betaHead, rosF, rosG, rosH) {
  if (rosF <= 0 || rosH <= 0) {
    return 0
  }

  const betaRadians = radians(betaHead)
  const cosBeta = Math.cos(betaRadians)
  const cos2Beta = cosBeta * cosBeta
  const sin2Beta = 1 - cos2Beta
  const f2 = rosF * rosF
  const g2 = rosG * rosG
  const h2 = rosH * rosH
  const term = Math.sqrt(h2 * cos2Beta + (f2 - g2) * sin2Beta)
  const num = rosH * cosBeta * term - rosF * rosG * sin2Beta
  const denom = h2 * cos2Beta + f2 * sin2Beta
  const cosThetaRadians = num / denom
  let thetaRadians = Math.acos(cosThetaRadians) // Quadrant adjustment

  if (betaRadians < Math.PI) ; else if (betaRadians >= Math.PI) {
    thetaRadians = 2 * Math.PI - thetaRadians
  } // Convert theta radians to degrees

  let thetaHead = degrees(thetaRadians)

  if (betaHead > 180) {
    thetaHead = 360 - thetaHead
  }

  return thetaHead
} // //--------------------------------------------------------------------------
// /** \brief Updates beta wrt head from theta.
//  *
//  * Calculate the degrees from the fire ignition point given the degrees
//  * from the ellipse center and some ellipse paramaters.
//  *
//  * @param theta Azimuth from the ellipse center wrt the fire head
//  * @param rosF spread rate at F
//  * @param rosG spread rate at G
//  * @param rosH spread rate at H
//  * @returns The azimuth from the fire ignition point.
//  */
// export function betaFromTheta( theta, rosF, rosG, rosH) {
//   const thetaRadians = Compass.radians(theta)
//   const num = rosH * Math.sin( thetaRadians)
//   const denom = rosG + rosF* Math.cos(thetaRadians)
//   let betaRadians = ( denom <= 0 ) ? 0 : Math.atan( num / denom )
//   // Quandrant adjustment
//   const boundary1 = 150
//   const boundary2 = 210
//   if (theta <= boundary1) {
//     // no adjustment required
//   } else if (theta > boundary1 && theta <= boundary2) {
//     betaRadians += Math.PI
//   } else if (theta > boundary2) {
//     betaRadians += 2.0 * Math.PI
//   }
//   // Convert beta radians to degrees
//   return Compass.degrees(betaRadians)
// }
// export function thetaFromPsi( psiHead, rosF, rosH ) {
//   if ( rosF <= 0 ) {
//     return 0.0
//   }
//   const tanThetaRadians = Math.tan( psiHead ) * rosH / rosF
//   let thetaRadians = Math.atan( tanThetaRadians )
//   // Quadrant adjustment
//   if ( psiRadians <= 0.5 * Math.PI ) {
//     // no adjustment
//   } else if ( psiRadians > 0.5 * Math.PI && psiRadians <= 1.5 * Math.PI ) {
//     thetaRadians += Math.PI
//   } else if ( psiRadians > 1.5 * Math.PI ) {
//     thetaRadians += 2 * Math.PI
//   }
//   //thetaRadians += ( thetaRadians < 0. || psiradians > pi ) ? pi : 0.
//   // Convert theta radians to degrees
//   thetaDegrees = Compass.degrees( thetaRadians )
//   return thetaRadians
// }

/**
 * @file Exported WFSP fuel bed equations
 * as described by Rothermel (1972) and as implemented by BehavePlus V6.
 * @version 0.1.0
 * @copyright Systems for Environmental Management 2020
 * @author Collin D. Bevins
 * @license MIT
 */
/**
 * Calculate the 'live' fuel category moisture content of extinction.
 *
 * @param real mextk The 'live' fuel category moisture content of extinction factor (ratio).
 * @param real dfmc The 'dead' fuel category fine moisture content (ratio).
 * @param real dmext The 'dead' category moisture content of extinction (ratio).
 * @return real The 'live' fuel category  moisture content of extinction (ratio).
 */

function extinctionMoistureContent (mextk, dfmc, dmext) {
  const dry = 1 - divide(dfmc, dmext)
  const lmext = mextk * dry - 0.226
  return Math.max(lmext, dmext)
}
/**
 * Calculate the 'live' fuel category moisture content of extinction factor.
 *
 * This factor is constant for a fuel bed, and represents the ratio
 * of dead-to-live fuel mass that must be raised to ignition.  It
 * is the method described by Rothermel (1972) on page 35 that was
 * subsequently refined in BEHAVE and BehavePlus to use the
 * effective fuel load and effective heating number to determine
 * the ratio of fine dead to fine live fuels.
 *
 * See Rothermel (1972) eq 88 on page 35.
 *
 * @param float defl The 'dead' fuel catagory total fine fuel load (lb+1 ft-2).
 * @param float lefl The 'live' fuel catagory total fine fuel load (lb+1 ft-2).
 *
 * @return float The 'live' fuel category moisture content of extinction factor.
 */

function extinctionMoistureContentFactor (defl, lefl) {
  return 2.9 * divide(defl, lefl)
}
/**
 * Calculate the fire heat per unit area.
 *
 * @param real rxi Fire reaction intensity (btu+1 ft-2 min-1).
 * @param real taur The fire/flame residence time (min+1).
 * @return The heat per unit area (btu+1 ft-2).
 */

function heatPerUnitArea$1 (rxi, taur) {
  return rxi * taur
}
/**
 *
 * @param float qig Fuel bed heat of pre-ignition (btu+1 lb-1)
 * @param float bulk Fuel bed bulk density (lb+1 ft-3)
 * @return float Fuel bed heat sink (btu+1 ft-3)
 */

function heatSink (qig, bulk) {
  return qig * bulk
}
/**
 * Calculate the dead or live category mineral damping coefficient.
 *
 * @param float lifeCategoryEffectiveMineralContent
 * @return float Dead or live fuel category mineral damping coefficient.
 */

function mineralDamping (seff) {
  const etas = seff <= 0 ? 1 : 0.174 / Math.pow(seff, 0.19)
  return fraction(etas)
}
/**
 * Calculate the dead or live life category moisture damping coefficient.
 *
 * @param mois Life fuel category moisture content (ratio).
 * @param mext Life fuel category moisture content of extinction (ratio).
 * @return The life fuel category moisture damping coefficient (fraction).
 */

function moistureDamping (mois, mext) {
  const r = divide(mois, mext)
  return fraction(1 - 2.59 * r + 5.11 * r * r - 3.52 * r * r * r)
}
/**
 * Calculate the no-wind no-slope fire spread rate.
 *
 * @param real rxi The total fire reaction intensity (btu+1 ft-2 min-1).
 * @param real pflx The fuel bed propagating flux ratio (ratio).
 * @param real sink The fuel bed heat sink (btu+1 ft-3).
 * @return The no-wind no-slope fire spread rate (ft+1 min-1).
 */

function noWindNoSlopeSpreadRate (rxi, pflx, sink) {
  return positive(divide(pflx * rxi, sink))
}
/**
 * Calculate the open-canopy midflame wind speed adjustment factor.
 *
 * @param fuelDepth Fuel bed depth (ft+1)
 * @return Wind speed adjustment factor
 */

function openWindSpeedAdjustmentFactor (fuelDepth) {
  const f = Math.min(6, Math.max(fuelDepth, 0.1))
  return 1.83 / Math.log((20 + 0.36 * f) / (0.13 * f))
}
/**
 * Calculate the fuel bed optimum packing ratio (fraction).
 *
 * See Rothermel (1972) eq 37 (p 19, 26) and eq 69 (p32).
 *
 * @param float bedSavr Fuel bed surface area-to-volume ratio (ft-1).
 * @return float The fuel bed optimum packing ratio (fraction).
 */

function optimumPackingRatio (savr) {
  return savr <= 0 ? 0 : 3.348 / Math.pow(savr, 0.8189)
}
function packingRatio (deadPprc, livePprc, depth) {
  return divide(deadPprc + livePprc, depth)
}
/**
 * Calculate the no-wind propagating flux ratio (ratio).
 *
 * The propagating flux is the numerator of the Rothermel (1972) spread
 * rate equation 1 and has units of heat per unit area per unit time.
 *
 * See Rothermel (1972) eq 42 (p 20, 26) and eq 76 (p32).
 *
 * @param float savr The fuel bed characteristic surface area-to-volume ratio (ft-1).
 * @param float beta The fuel bed packing ratio (ratio).
 * @return float The fuel bed no-wind propagating flux ratio (ratio).
 */

function propagatingFluxRatio (savr, beta) {
  return savr <= 0 ? 0 : Math.exp((0.792 + 0.681 * Math.sqrt(savr)) * (beta + 0.1)) / (192 + 0.2595 * savr)
}
/**
 * Calculate the life fuel category reaction intensity without moisture damping.
 *
 * @param float rxvo Fuel bed optimum reaction velocity (min-1).
 * @param float wnet Life fuel category net ovendry fuel load (lb+1 ft-2).
 * @param float heat Life fuel category heat of combustion (btu+1 lb-1).
 * @param float etas Life fuel category mineral damping coefficient (fraction).
 * @return float The life fuel category reaction intensity (btu+1 ft-2 min-1)
 *      without moisture damping.
 */

function reactionIntensityDry (rxvo, wnet, heat, etas) {
  return rxvo * wnet * heat * etas
}
/**
 * Calculate the fuel bed reaction velocity exponent 'A'.
 *
 * This is an arbitrary variable 'A'  used to derive the
 * fuel bed optimum reaction velocity.
 * See Rothermel (1972) eq 39 (p19, 26) and 67 (p 31).
 *
 * @param float savr Fuel bed surface area-to-volume ratio (ft-1).
 * @return float Fuel bed reaction velocity exponent 'A' (ratio).
 */

function reactionVelocityExponent (savr) {
  return savr <= 0 ? 0 : 133 / Math.pow(savr, 0.7913)
}
/**
 * Calculate the fuel bed maximum reaction velocity (min-1).
 *
 * See Rothermel (1972) eq 36 (p 19, 26) and 68 (p 32).
 *
 * @param float bedSavr Fuel bed surface area-to-volume ratio (ft-1).
 * @return float Fuel bed maximum reaction velocity (min-1).
 */

function reactionVelocityMaximum (sv15) {
  return sv15 <= 0 ? 0 : sv15 / (495 + 0.0594 * sv15)
}
/**
 * Calculate the fuel bed optimum reaction velocity (min-1).
 *
 * See Rothermel (1972) eq 38 (p 19, 26) and eq 67 (p 31).
 *
 * @param float betr Fuel bed packing ratio ratio (ratio).
 * @param float rxvm Fuel bed maximum reaction velocity (min-1).
 * @param float rxve Fuel bed reaction velocity exponent 'A' (ratio).
 * @return float Fuel bed optimum reaction velocity (min-1).
 */

function reactionVelocityOptimum (betr, rxvm, rxve) {
  return betr <= 0 || betr === 1 ? 0 : rxvm * Math.pow(betr, rxve) * Math.exp(rxve * (1 - betr))
} // DEPRECATED - The size class surface area calculations are now done inside swtg()
// Accumulate fuel particle surface area by size class
// for fuel particles with size class idx
// export function scArea(idx, s1, a1, s2, a2, s3, a3, s4, a4, s5, a5) {
//   let area = 0
//   area += (idx === s1) ? a1 : 0
//   area += (idx === s2) ? a2 : 0
//   area += (idx === s3) ? a3 : 0
//   area += (idx === s4) ? a4 : 0
//   area += (idx === s5) ? a5 : 0
//   return area
// }

/**
 * Calculate the often-used intermediate parameter of the fuel bed's
 * characteristics surface area-to-volume ratio raised to the 1.5 power.
 *
 * @param float savr Fuel bed characteristic surface area-to-volume ratio (ft-1).
 * @return float Fuel bed parameter (ratio).
 */

function savr15 (savr) {
  return Math.pow(savr, 1.5)
}
/**
 * Calculate the fuel bed slope coeffient `phiS` slope factor.
 *
 * This factor is an intermediate parameter that is constant for a fuel bed,
 * and used to determine the fire spread slope coefficient `phiS`.
 *
 * See Rothermel (1972) eq 51 (p 24, 26) and eq 80 (p 33).
 *
 * @param float packingRatio Fuel bed packing ratio (ratio).
 * @return float Factor used to derive the slope coefficient `phiS' (ratio).
 */

function slopeK (beta) {
  return beta <= 0 ? 0 : 5.275 * Math.pow(beta, -0.3)
} // Returns an array of 6 size class area weighting factors

function sizeClassWeightingFactorArray (a1, s1, a2, s2, a3, s3, a4, s4, a5, s5) {
  const a = [a1, a2, a3, a4, a5]
  const s = [s1, s2, s3, s4, s5]
  let tarea = 0.0
  const scar = [0, 0, 0, 0, 0, 0]

  for (let idx = 0; idx < 5; idx += 1) {
    scar[s[idx]] += a[idx]
    tarea += a[idx]
  }

  const scwt = [0, 0, 0, 0, 0, 0]

  if (tarea > 0.0) {
    for (let _idx = 0; _idx < 6; _idx += 1) {
      scwt[_idx] = scar[_idx] / tarea
    }
  }

  return scwt
}
/**
 * Calculate the fuel bed flame residence time.
 *
 * \TODO find reference
 *
 * @param float savr Fuel bed surface area-to-volume ratio (ft-1).
 * @return float Fuel bed flame residence time (min+1).
 */

function taur (savr) {
  return savr <= 0 ? 0 : 384 / savr
}
/**
 * Calculate the fuel bed wind coefficient `phiW` correlation factor `B`.
 *
 * This factor is an intermediate parameter that is constant for a fuel bed,
 * and is used to derive the fire spread wind coefficient `phiW`.
 *
 * See Rothermel (1972) eq 49 (p 23, 26) and eq 83 (p 33).
 *
 * @param float savr Fuel bed characteristic surface area-to-volume ratio (ft-1).
 * @return float Wind coefficient `phiW` correlation parameter `B` (ratio).
 */

function windB (savr) {
  return 0.02526 * Math.pow(savr, 0.54)
}
/**
 * Calculate the fuel bed wind coefficient `phiW` correlation factor `C`.
 *
 * This factor is an intermediate parameter that is constant for a fuel bed,
 * and is used to derive the fire spread wind coefficient `phiW`.
 *
 * See Rothermel (1972) eq 48 (p 23, 26) and eq 82 (p 33).
 *
 * @param float savr Fuel bed characteristic surface area-to-volume ratio (ft-1).
 * @return float Wind coefficient `phiW` correlation parameter `C` (ratio).
 */

function windC (savr) {
  return 7.47 * Math.exp(-0.133 * Math.pow(savr, 0.55))
}
/**
 * Calculate the fuel bed wind coefficient `phiW` correlation factor `E`.
 *
 * This factor is an intermediate parameter that is constant for a fuel bed,
 * and is used to derive the fire spread wind coefficient `phiW`.
 *
 * See Rothermel (1972) eq 50 (p 23, 26) and eq 82 (p 33).
 *
 * @param float savr Fuel bed characteristic surface area-to-volume ratio (ft-1).
 * @return float Wind coefficient `phiW` correlation parameter `E` (ratio).
 */

function windE (savr) {
  return 0.715 * Math.exp(-0.000359 * savr)
}
/**
 * Calculate the fuel bed wind coeffient `phiW` wind factor.
 *
 * This factor is an intermediate parameter that is constant for a fuel bed,
 * and used to determine the fire spread wind coefficient `phiW`.
 *
 * See Rothermel (1972) eq 47 (p 23, 26) and eq 79 (p 33).
 *
 * @param float betr Fuel bed packing ratio (ratio).
 * @param float wnde The fuel bed wind coefficient `phiW` correlation factor `E`.
 * @param float wndc The fuel bed wind coefficient `phiW` correlation factor `C`.
 * @return float Factor used to derive the wind coefficient `phiW' (ratio).
 */

function windK (betr, wnde, wndc) {
  return betr <= 0 ? 0 : wndc * Math.pow(betr, -wnde)
}
/**
 * Calculate the fuel bed wind coeffient `phiW` inverse K wind factor.
 *
 * This factor is an intermediate parameter that is constant for a fuel bed,
 * and used to determine the fire spread wind coefficient `phiW`.
 *
 * It is the inverse of the wind factor 'K', and is used to re-derive
 * effective wind speeds within the BEHAVE fire spread computations.
 *
 * See Rothermel (1972) eq 47 (p 23, 26) and eq 79 (p 33).
 *
 * @param float betr Fuel bed packing ratio ratio (ratio).
 * @param float wnde The fuel bed wind coefficient `phiW` correlation factor `E`.
 * @param float wndc The fuel bed wind coefficient `phiW` correlation factor `C`.
 * @return float Factor used to derive the wind coefficient `phiW' (ratio).
 */

function windI (betr, wnde, wndc) {
  return betr <= 0.0 || wndc <= 0 ? 0 : Math.pow(betr, wnde) / wndc
}
function windSpeedAdjustmentFactor$1 (fuelSheltered, shelteredWaf, openWaf) {
  return fuelSheltered ? Math.min(shelteredWaf, openWaf) : openWaf
}

/**
 * @file Exported BehavePlus fuel catalog accessors.
 * @version 0.1.0
 * @copyright Systems for Environmental Management 2020
 * @author Collin D. Bevins
 * @license MIT
 */
const Domains = ['behave', 'chaparral', 'palmettoGallberry', 'westernAspen']
/**
 * Map of fuel model aliases
 */

const Alias = new Map([['0', '0'], [0, '0'], ['none', '0'], ['rock', '0'], ['water', '0'], ['1', '1'], [1, '1'], ['2', '2'], [2, '2'], ['3', '3'], [3, '3'], ['4', '4'], [4, '4'], ['5', '5'], [5, '5'], ['6', '6'], [6, '6'], ['7', '7'], [7, '7'], ['8', '8'], [8, '8'], ['9', '9'], [9, '9'], ['10', '10'], [10, '10'], ['11', '11'], [11, '11'], ['12', '12'], [12, '12'], ['13', '13'], [13, '13'], ['101', '101'], [101, '101'], ['gr1', '101'], ['102', '102'], [102, '102'], ['gr2', '102'], ['103', '103'], [103, '103'], ['gr3', '103'], ['104', '104'], [104, '104'], ['gr4', '104'], ['105', '105'], [105, '105'], ['gr5', '105'], ['106', '106'], [106, '106'], ['gr6', '106'], ['107', '107'], [107, '107'], ['gr7', '107'], ['108', '108'], [108, '108'], ['gr8', '108'], ['109', '109'], [109, '109'], ['gr9', '109'], ['121', '121'], [121, '121'], ['gs1', '121'], ['122', '122'], [122, '122'], ['gs2', '122'], ['123', '123'], [123, '123'], ['gs3', '123'], ['124', '124'], [124, '124'], ['gs4', '124'], ['141', '141'], [141, '141'], ['sh1', '141'], ['142', '142'], [142, '142'], ['sh2', '142'], ['143', '143'], [143, '143'], ['sh3', '143'], ['144', '144'], [144, '144'], ['sh4', '144'], ['145', '145'], [145, '145'], ['sh5', '145'], ['146', '146'], [146, '146'], ['sh6', '146'], ['147', '147'], [147, '147'], ['sh7', '147'], ['148', '148'], [148, '148'], ['sh8', '148'], ['149', '149'], [149, '149'], ['sh9', '149'], ['161', '161'], [161, '161'], ['tu1', '161'], ['162', '162'], [162, '162'], ['tu2', '162'], ['163', '163'], [163, '163'], ['tu3', '163'], ['164', '164'], [164, '164'], ['tu4', '164'], ['165', '165'], [165, '165'], ['tu5', '165'], ['181', '181'], [181, '181'], ['tl1', '181'], ['182', '182'], [182, '182'], ['tl2', '182'], ['183', '183'], [183, '183'], ['tl3', '183'], ['184', '184'], [184, '184'], ['tl4', '184'], ['185', '185'], [185, '185'], ['tl5', '185'], ['186', '186'], [186, '186'], ['tl6', '186'], ['187', '187'], [187, '187'], ['tl7', '187'], ['188', '188'], [188, '188'], ['tl8', '188'], ['189', '189'], [189, '189'], ['tl9', '189'], ['201', '201'], [201, '201'], ['sb1', '201'], ['202', '202'], [202, '202'], ['sb2', '202'], ['203', '203'], [203, '203'], ['sb3', '203'], ['204', '204'], [204, '204'], ['sb4', '204'], ['301', '301'], [301, '301'], ['chaparral/type=chamise/depth=6/deadFraction=0.5', '301'], ['401', '401'], [401, '401'], ['pg/age=20/basal=120/cover=.8/height=5', '401'], ['501', '501'], [501, '501'], ['aspenShrub50', '501']])
/**
 * Map of standard fuel models
 * where the map key is the model number as a text string
 */

const Model = new Map([// Example special case dynamic fuel models:
  ['301', {
    domain: 'chaparral',
    label: 'chaparral, type=chamise, depth=6, deadFraction=0.5',
    number: 301,
    code: 'chaparral/type=chamise/depth=6/deadFraction=0.5',
    depth: 6,
    // the observed.depth
    totalLoad: 1,
    // the observed.totalLoad
    deadFraction: 0.5,
    // the observed.deadFuelFraction
    fuelType: 'chamise'
  }], ['401', {
    domain: 'palmettoGallberry',
    label: 'pg, age=20, basal=120, cover=.8, height=5',
    number: 401,
    code: 'pg/age=20/basal=120/cover=.8/height=5',
    age: 20,
    basalArea: 120,
    cover: 0.8,
    height: 5
  }], ['501', {
    domain: 'westernAspen',
    label: 'Aspen-shrub 50%',
    number: 501,
    code: 'aspenShrub50',
    curingLevel: 0.5,
    fuelType: 'aspenShrub'
  }], [// Standard BehavePlus Fuel Models
    '0', {
      domain: 'behave',
      label: 'No Fuel',
      number: 0,
      code: 'none',
      depth: 0,
      deadMext: 0,
      dead1Load: 0,
      dead10Load: 0,
      dead100Load: 0,
      totalHerbLoad: 0,
      liveStemLoad: 0,
      dead1Savr: 0,
      liveHerbSavr: 0,
      liveStemSavr: 0,
      deadHeat: 0,
      liveHeat: 0
    }], ['1', {
    domain: 'behave',
    label: 'Short grass',
    number: 1,
    code: '1',
    depth: 1,
    deadMext: 0.12,
    dead1Load: 0.034,
    dead10Load: 0,
    dead100Load: 0,
    totalHerbLoad: 0,
    liveStemLoad: 0,
    dead1Savr: 3500,
    liveHerbSavr: 1500,
    liveStemSavr: 1500,
    deadHeat: 8000,
    liveHeat: 8000
  }], ['2', {
    domain: 'behave',
    label: 'Timber grass and understory',
    number: 2,
    code: '2',
    depth: 1,
    deadMext: 0.15,
    dead1Load: 0.092,
    dead10Load: 0.046,
    dead100Load: 0.023,
    totalHerbLoad: 0.023,
    liveStemLoad: 0,
    dead1Savr: 3000,
    liveHerbSavr: 1500,
    liveStemSavr: 1500,
    deadHeat: 8000,
    liveHeat: 8000
  }], ['3', {
    domain: 'behave',
    label: 'Tall grass',
    number: 3,
    code: '3',
    depth: 2.5,
    deadMext: 0.25,
    dead1Load: 0.138,
    dead10Load: 0,
    dead100Load: 0,
    totalHerbLoad: 0,
    liveStemLoad: 0,
    dead1Savr: 1500,
    liveHerbSavr: 1500,
    liveStemSavr: 1500,
    deadHeat: 8000,
    liveHeat: 8000
  }], ['4', {
    domain: 'behave',
    label: 'Chaparral',
    number: 4,
    code: '4',
    depth: 6,
    deadMext: 0.2,
    dead1Load: 0.23,
    dead10Load: 0.184,
    dead100Load: 0.092,
    totalHerbLoad: 0,
    liveStemLoad: 0.23,
    dead1Savr: 2000,
    liveHerbSavr: 1500,
    liveStemSavr: 1500,
    deadHeat: 8000,
    liveHeat: 8000
  }], ['5', {
    domain: 'behave',
    label: 'Brush',
    number: 5,
    code: '5',
    depth: 2,
    deadMext: 0.2,
    dead1Load: 0.046,
    dead10Load: 0.023,
    dead100Load: 0,
    totalHerbLoad: 0,
    liveStemLoad: 0.092,
    dead1Savr: 2000,
    liveHerbSavr: 1500,
    liveStemSavr: 1500,
    deadHeat: 8000,
    liveHeat: 8000
  }], ['6', {
    domain: 'behave',
    label: 'Dormant brush, hardwood slash',
    number: 6,
    code: '6',
    depth: 2.5,
    deadMext: 0.25,
    dead1Load: 0.069,
    dead10Load: 0.115,
    dead100Load: 0.092,
    totalHerbLoad: 0,
    liveStemLoad: 0,
    dead1Savr: 1750,
    liveHerbSavr: 1500,
    liveStemSavr: 1500,
    deadHeat: 8000,
    liveHeat: 8000
  }], ['7', {
    domain: 'behave',
    label: 'Southern rough',
    number: 7,
    code: '7',
    depth: 2.5,
    deadMext: 0.4,
    dead1Load: 0.052,
    dead10Load: 0.086,
    dead100Load: 0.069,
    totalHerbLoad: 0,
    liveStemLoad: 0.017,
    dead1Savr: 1750,
    liveHerbSavr: 1500,
    liveStemSavr: 1500,
    deadHeat: 8000,
    liveHeat: 8000
  }], ['8', {
    domain: 'behave',
    label: 'Short needle litter',
    number: 8,
    code: '8',
    depth: 0.2,
    deadMext: 0.3,
    dead1Load: 0.069,
    dead10Load: 0.046,
    dead100Load: 0.115,
    totalHerbLoad: 0,
    liveStemLoad: 0,
    dead1Savr: 2000,
    liveHerbSavr: 1500,
    liveStemSavr: 1500,
    deadHeat: 8000,
    liveHeat: 8000
  }], ['9', {
    domain: 'behave',
    label: 'Long needle or hardwood litter',
    number: 9,
    code: '9',
    depth: 0.2,
    deadMext: 0.25,
    dead1Load: 0.134,
    dead10Load: 0.019,
    dead100Load: 0.007,
    totalHerbLoad: 0,
    liveStemLoad: 0,
    dead1Savr: 2500,
    liveHerbSavr: 1500,
    liveStemSavr: 1500,
    deadHeat: 8000,
    liveHeat: 8000
  }], ['10', {
    domain: 'behave',
    label: 'Timber litter & understory',
    number: 10,
    code: '10',
    depth: 1,
    deadMext: 0.25,
    dead1Load: 0.138,
    dead10Load: 0.092,
    dead100Load: 0.23,
    totalHerbLoad: 0,
    liveStemLoad: 0.092,
    dead1Savr: 2000,
    liveHerbSavr: 1500,
    liveStemSavr: 1500,
    deadHeat: 8000,
    liveHeat: 8000
  }], ['11', {
    domain: 'behave',
    label: 'Light logging slash',
    number: 11,
    code: '11',
    depth: 1,
    deadMext: 0.15,
    dead1Load: 0.069,
    dead10Load: 0.207,
    dead100Load: 0.253,
    totalHerbLoad: 0,
    liveStemLoad: 0,
    dead1Savr: 1500,
    liveHerbSavr: 1500,
    liveStemSavr: 1500,
    deadHeat: 8000,
    liveHeat: 8000
  }], ['12', {
    domain: 'behave',
    label: 'Medium logging slash',
    number: 12,
    code: '12',
    depth: 2.3,
    deadMext: 0.2,
    dead1Load: 0.184,
    dead10Load: 0.644,
    dead100Load: 0.759,
    totalHerbLoad: 0,
    liveStemLoad: 0,
    dead1Savr: 1500,
    liveHerbSavr: 1500,
    liveStemSavr: 1500,
    deadHeat: 8000,
    liveHeat: 8000
  }], ['13', {
    domain: 'behave',
    label: 'Heavy logging slash',
    number: 13,
    code: '13',
    depth: 3,
    deadMext: 0.25,
    dead1Load: 0.322,
    dead10Load: 1.058,
    dead100Load: 1.288,
    totalHerbLoad: 0,
    liveStemLoad: 0,
    dead1Savr: 1500,
    liveHerbSavr: 1500,
    liveStemSavr: 1500,
    deadHeat: 8000,
    liveHeat: 8000
  }], ['101', {
    domain: 'behave',
    label: 'Short, sparse, dry climate grass',
    number: 101,
    code: 'gr1',
    depth: 0.4,
    deadMext: 0.15,
    dead1Load: 0.004591368227731864,
    dead10Load: 0,
    dead100Load: 0,
    totalHerbLoad: 0.013774104683195591,
    liveStemLoad: 0,
    dead1Savr: 2200,
    liveHerbSavr: 2000,
    liveStemSavr: 1500,
    deadHeat: 8000,
    liveHeat: 8000
  }], ['102', {
    domain: 'behave',
    label: 'Low load, dry climate grass',
    number: 102,
    code: 'gr2',
    depth: 1,
    deadMext: 0.15,
    dead1Load: 0.004591368227731864,
    dead10Load: 0,
    dead100Load: 0,
    totalHerbLoad: 0.04591368227731864,
    liveStemLoad: 0,
    dead1Savr: 2000,
    liveHerbSavr: 1800,
    liveStemSavr: 1500,
    deadHeat: 8000,
    liveHeat: 8000
  }], ['103', {
    domain: 'behave',
    label: 'Low load, very coarse, humid climate grass',
    number: 103,
    code: 'gr3',
    depth: 2,
    deadMext: 0.3,
    dead1Load: 0.004591368227731864,
    dead10Load: 0.018365472910927456,
    dead100Load: 0,
    totalHerbLoad: 0.06887052341597796,
    liveStemLoad: 0,
    dead1Savr: 1500,
    liveHerbSavr: 1300,
    liveStemSavr: 1500,
    deadHeat: 8000,
    liveHeat: 8000
  }], ['104', {
    domain: 'behave',
    label: 'Moderate load, dry climate grass',
    number: 104,
    code: 'gr4',
    depth: 2,
    deadMext: 0.15,
    dead1Load: 0.01147842056932966,
    dead10Load: 0,
    dead100Load: 0,
    totalHerbLoad: 0.0872359963269054,
    liveStemLoad: 0,
    dead1Savr: 2000,
    liveHerbSavr: 1800,
    liveStemSavr: 1500,
    deadHeat: 8000,
    liveHeat: 8000
  }], ['105', {
    domain: 'behave',
    label: 'Low load, humid climate grass',
    number: 105,
    code: 'gr5',
    depth: 1.5,
    deadMext: 0.4,
    dead1Load: 0.018365472910927456,
    dead10Load: 0,
    dead100Load: 0,
    totalHerbLoad: 0.11478420569329659,
    liveStemLoad: 0,
    dead1Savr: 1800,
    liveHerbSavr: 1600,
    liveStemSavr: 1500,
    deadHeat: 8000,
    liveHeat: 8000
  }], ['106', {
    domain: 'behave',
    label: 'Moderate load, humid climate grass',
    number: 106,
    code: 'gr6',
    depth: 1.5,
    deadMext: 0.4,
    dead1Load: 0.004591368227731864,
    dead10Load: 0,
    dead100Load: 0,
    totalHerbLoad: 0.15610651974288337,
    liveStemLoad: 0,
    dead1Savr: 2200,
    liveHerbSavr: 2000,
    liveStemSavr: 1500,
    deadHeat: 9000,
    liveHeat: 9000
  }], ['107', {
    domain: 'behave',
    label: 'High load, dry climate grass',
    number: 107,
    code: 'gr7',
    depth: 3,
    deadMext: 0.15,
    dead1Load: 0.04591368227731864,
    dead10Load: 0,
    dead100Load: 0,
    totalHerbLoad: 0.24793388429752067,
    liveStemLoad: 0,
    dead1Savr: 2000,
    liveHerbSavr: 1800,
    liveStemSavr: 1500,
    deadHeat: 8000,
    liveHeat: 8000
  }], ['108', {
    domain: 'behave',
    label: 'High load, very coarse, humid climate grass',
    number: 108,
    code: 'gr8',
    depth: 4,
    deadMext: 0.3,
    dead1Load: 0.02295684113865932,
    dead10Load: 0.0459139,
    dead100Load: 0,
    totalHerbLoad: 0.33516988062442604,
    liveStemLoad: 0,
    dead1Savr: 1500,
    liveHerbSavr: 1300,
    liveStemSavr: 1500,
    deadHeat: 8000,
    liveHeat: 8000
  }], ['109', {
    domain: 'behave',
    label: 'Very high load, humid climate grass',
    number: 109,
    code: 'gr9',
    depth: 5,
    deadMext: 0.4,
    dead1Load: 0.04591368227731864,
    dead10Load: 0.04591368227731864,
    dead100Load: 0,
    totalHerbLoad: 0.4132231404958677,
    liveStemLoad: 0,
    dead1Savr: 1800,
    liveHerbSavr: 1600,
    liveStemSavr: 1500,
    deadHeat: 8000,
    liveHeat: 8000
  }], ['121', {
    domain: 'behave',
    label: 'Low load, dry climate grass-shrub',
    number: 121,
    code: 'gs1',
    depth: 0.9,
    deadMext: 0.15,
    dead1Load: 0.009182736455463728,
    dead10Load: 0,
    dead100Load: 0,
    totalHerbLoad: 0.02295684113865932,
    liveStemLoad: 0.02984403,
    dead1Savr: 2000,
    liveHerbSavr: 1800,
    liveStemSavr: 1800,
    deadHeat: 8000,
    liveHeat: 8000
  }], ['122', {
    domain: 'behave',
    label: 'Moderate load, dry climate grass-shrub',
    number: 122,
    code: 'gs2',
    depth: 1.5,
    deadMext: 0.15,
    dead1Load: 0.02295684113865932,
    dead10Load: 0.02295684113865932,
    dead100Load: 0,
    totalHerbLoad: 0.027548209366391182,
    liveStemLoad: 0.04591368227731864,
    dead1Savr: 2000,
    liveHerbSavr: 1800,
    liveStemSavr: 1800,
    deadHeat: 8000,
    liveHeat: 8000
  }], ['123', {
    domain: 'behave',
    label: 'Moderate load, humid climate grass-shrub',
    number: 123,
    code: 'gs3',
    depth: 1.8,
    deadMext: 0.4,
    dead1Load: 0.013774104683195591,
    dead10Load: 0.01147842056932966,
    dead100Load: 0,
    totalHerbLoad: 0.06657483930211203,
    liveStemLoad: 0.057392102846648294,
    dead1Savr: 1800,
    liveHerbSavr: 1600,
    liveStemSavr: 1600,
    deadHeat: 8000,
    liveHeat: 8000
  }], ['124', {
    domain: 'behave',
    label: 'High load, humid climate grass-shrub',
    number: 124,
    code: 'gs4',
    depth: 2.1,
    deadMext: 0.4,
    dead1Load: 0.0872359963269054,
    dead10Load: 0.013774104683195591,
    dead100Load: 0.004591368227731864,
    totalHerbLoad: 0.15610651974288337,
    liveStemLoad: 0.3259871441689623,
    dead1Savr: 1800,
    liveHerbSavr: 1600,
    liveStemSavr: 1600,
    deadHeat: 8000,
    liveHeat: 8000
  }], ['141', {
    domain: 'behave',
    label: 'Low load, dry climate shrub',
    number: 141,
    code: 'sh1',
    depth: 1,
    deadMext: 0.15,
    dead1Load: 0.01147842056932966,
    dead10Load: 0.01147842056932966,
    dead100Load: 0,
    totalHerbLoad: 0.0068870523415977955,
    liveStemLoad: 0.05968778696051423,
    dead1Savr: 2000,
    liveHerbSavr: 1800,
    liveStemSavr: 1600,
    deadHeat: 8000,
    liveHeat: 8000
  }], ['142', {
    domain: 'behave',
    label: 'Moderate load, dry climate shrub',
    number: 142,
    code: 'sh2',
    depth: 1,
    deadMext: 0.15,
    dead1Load: 0.06198347107438017,
    dead10Load: 0.11019283746556473,
    dead100Load: 0.03443526170798898,
    totalHerbLoad: 0,
    liveStemLoad: 0.17676767676767677,
    dead1Savr: 2000,
    liveHerbSavr: 1800,
    liveStemSavr: 1600,
    deadHeat: 8000,
    liveHeat: 8000
  }], ['143', {
    domain: 'behave',
    label: 'Moderate load, humid climate shrub',
    number: 143,
    code: 'sh3',
    depth: 2.4,
    deadMext: 0.4,
    dead1Load: 0.02066115702479339,
    dead10Load: 0.13774104683195593,
    dead100Load: 0,
    totalHerbLoad: 0,
    liveStemLoad: 0.28466483011937554,
    dead1Savr: 1600,
    liveHerbSavr: 1800,
    liveStemSavr: 1400,
    deadHeat: 8000,
    liveHeat: 8000
  }], ['144', {
    domain: 'behave',
    label: 'Low load, humid climate timber-shrub',
    number: 144,
    code: 'sh4',
    depth: 3,
    deadMext: 0.3,
    dead1Load: 0.03902662993572084,
    dead10Load: 0.05280073461891643,
    dead100Load: 0.009182736455463728,
    totalHerbLoad: 0,
    liveStemLoad: 0.11707988980716252,
    dead1Savr: 2000,
    liveHerbSavr: 1800,
    liveStemSavr: 1600,
    deadHeat: 8000,
    liveHeat: 8000
  }], ['145', {
    domain: 'behave',
    label: 'High load, dry climate shrub',
    number: 145,
    code: 'sh5',
    depth: 6,
    deadMext: 0.15,
    dead1Load: 0.1652892561983471,
    dead10Load: 0.09641873278236915,
    dead100Load: 0,
    totalHerbLoad: 0,
    liveStemLoad: 0.13314967860422405,
    dead1Savr: 750,
    liveHerbSavr: 1800,
    liveStemSavr: 1600,
    deadHeat: 8000,
    liveHeat: 8000
  }], ['146', {
    domain: 'behave',
    label: 'Low load, humid climate shrub',
    number: 146,
    code: 'sh6',
    depth: 2,
    deadMext: 0.3,
    dead1Load: 0.13314967860422405,
    dead10Load: 0.06657483930211203,
    dead100Load: 0,
    totalHerbLoad: 0,
    liveStemLoad: 0.06427915518824609,
    dead1Savr: 750,
    liveHerbSavr: 1800,
    liveStemSavr: 1600,
    deadHeat: 8000,
    liveHeat: 8000
  }], ['147', {
    domain: 'behave',
    label: 'Very high load, dry climate shrub',
    number: 147,
    code: 'sh7',
    depth: 6,
    deadMext: 0.15,
    dead1Load: 0.16069788797061524,
    dead10Load: 0.24334251606978877,
    dead100Load: 0.10101010101010101,
    totalHerbLoad: 0,
    liveStemLoad: 0.15610651974288337,
    dead1Savr: 750,
    liveHerbSavr: 1800,
    liveStemSavr: 1600,
    deadHeat: 8000,
    liveHeat: 8000
  }], ['148', {
    domain: 'behave',
    label: 'High load, humid climate shrub',
    number: 148,
    code: 'sh8',
    depth: 3,
    deadMext: 0.4,
    dead1Load: 0.0941230486685032,
    dead10Load: 0.15610651974288337,
    dead100Load: 0.03902662993572084,
    totalHerbLoad: 0,
    liveStemLoad: 0.19972451790633605,
    dead1Savr: 750,
    liveHerbSavr: 1800,
    liveStemSavr: 1600,
    deadHeat: 8000,
    liveHeat: 8000
  }], ['149', {
    domain: 'behave',
    label: 'Very high load, humid climate shrub',
    number: 149,
    code: 'sh9',
    depth: 4.4,
    deadMext: 0.4,
    dead1Load: 0.20661157024793386,
    dead10Load: 0.11248852157943066,
    dead100Load: 0,
    totalHerbLoad: 0.07116620752984389,
    liveStemLoad: 0.3213957759412305,
    dead1Savr: 750,
    liveHerbSavr: 1800,
    liveStemSavr: 1500,
    deadHeat: 8000,
    liveHeat: 8000
  }], ['161', {
    domain: 'behave',
    label: 'Light load, dry climate timber-grass-shrub',
    number: 161,
    code: 'tu1',
    depth: 0.6,
    deadMext: 0.2,
    dead1Load: 0.009182736455463728,
    dead10Load: 0.04132231404958678,
    dead100Load: 0.06887052341597796,
    totalHerbLoad: 0.009182736455463728,
    liveStemLoad: 0.04132231404958678,
    dead1Savr: 2000,
    liveHerbSavr: 1800,
    liveStemSavr: 1600,
    deadHeat: 8000,
    liveHeat: 8000
  }], ['162', {
    domain: 'behave',
    label: 'Moderate load, humid climate timber-shrub',
    number: 162,
    code: 'tu2',
    depth: 1,
    deadMext: 0.3,
    dead1Load: 0.0436179981634527,
    dead10Load: 0.08264462809917356,
    dead100Load: 0.057392102846648294,
    totalHerbLoad: 0,
    liveStemLoad: 0.009182736455463728,
    dead1Savr: 2000,
    liveHerbSavr: 1800,
    liveStemSavr: 1600,
    deadHeat: 8000,
    liveHeat: 8000
  }], ['163', {
    domain: 'behave',
    label: 'Moderate load, humid climate timber-grass-shrub',
    number: 163,
    code: 'tu4',
    depth: 1.3,
    deadMext: 0.3,
    dead1Load: 0.050505050505050504,
    dead10Load: 0.0068870523415977955,
    dead100Load: 0.01147842056932966,
    totalHerbLoad: 0.029843893480257115,
    liveStemLoad: 0.050505050505050504,
    dead1Savr: 1800,
    liveHerbSavr: 1600,
    liveStemSavr: 1400,
    deadHeat: 8000,
    liveHeat: 8000
  }], ['164', {
    domain: 'behave',
    label: 'Dwarf conifer understory',
    number: 164,
    code: 'tu4',
    depth: 0.5,
    deadMext: 0.12,
    dead1Load: 0.20661157024793386,
    dead10Load: 0,
    dead100Load: 0,
    totalHerbLoad: 0,
    liveStemLoad: 0.09182736455463728,
    dead1Savr: 2300,
    liveHerbSavr: 1800,
    liveStemSavr: 2000,
    deadHeat: 8000,
    liveHeat: 8000
  }], ['165', {
    domain: 'behave',
    label: 'Very high load, dry climate timber-shrub',
    number: 165,
    code: 'tu5',
    depth: 1,
    deadMext: 0.25,
    dead1Load: 0.18365472910927455,
    dead10Load: 0.18365472910927455,
    dead100Load: 0.13774104683195593,
    totalHerbLoad: 0,
    liveStemLoad: 0.13774104683195593,
    dead1Savr: 1500,
    liveHerbSavr: 1800,
    liveStemSavr: 750,
    deadHeat: 8000,
    liveHeat: 8000
  }], ['181', {
    domain: 'behave',
    label: 'Low load, compact conifer litter',
    number: 181,
    code: 'tl1',
    depth: 0.2,
    deadMext: 0.3,
    dead1Load: 0.04591368227731864,
    dead10Load: 0.10101010101010101,
    dead100Load: 0.1652892561983471,
    totalHerbLoad: 0,
    liveStemLoad: 0,
    dead1Savr: 2000,
    liveHerbSavr: 1800,
    liveStemSavr: 1600,
    deadHeat: 8000,
    liveHeat: 8000
  }], ['182', {
    domain: 'behave',
    label: 'Low load broadleaf litter',
    number: 182,
    code: 'tl2',
    depth: 0.2,
    deadMext: 0.25,
    dead1Load: 0.06427915518824609,
    dead10Load: 0.10560146923783285,
    dead100Load: 0.10101010101010101,
    totalHerbLoad: 0,
    liveStemLoad: 0,
    dead1Savr: 2000,
    liveHerbSavr: 1800,
    liveStemSavr: 1600,
    deadHeat: 8000,
    liveHeat: 8000
  }], ['183', {
    domain: 'behave',
    label: 'Moderate load conifer litter',
    number: 183,
    code: 'tl3',
    depth: 0.3,
    deadMext: 0.2,
    dead1Load: 0.02295684113865932,
    dead10Load: 0.10101010101010101,
    dead100Load: 0.12855831037649218,
    totalHerbLoad: 0,
    liveStemLoad: 0,
    dead1Savr: 2000,
    liveHerbSavr: 1800,
    liveStemSavr: 1600,
    deadHeat: 8000,
    liveHeat: 8000
  }], ['184', {
    domain: 'behave',
    label: 'Small downed logs',
    number: 184,
    code: 'tl4',
    depth: 0.4,
    deadMext: 0.25,
    dead1Load: 0.02295684113865932,
    dead10Load: 0.06887052341597796,
    dead100Load: 0.1928374655647383,
    totalHerbLoad: 0,
    liveStemLoad: 0,
    dead1Savr: 2000,
    liveHerbSavr: 1800,
    liveStemSavr: 1600,
    deadHeat: 8000,
    liveHeat: 8000
  }], ['185', {
    domain: 'behave',
    label: 'High load conifer litter',
    number: 185,
    code: 'tl5',
    depth: 0.6,
    deadMext: 0.25,
    dead1Load: 0.05280073461891643,
    dead10Load: 0.11478420569329659,
    dead100Load: 0.20202020202020202,
    totalHerbLoad: 0,
    liveStemLoad: 0,
    dead1Savr: 2000,
    liveHerbSavr: 1800,
    liveStemSavr: 1600,
    deadHeat: 8000,
    liveHeat: 8000
  }], ['186', {
    domain: 'behave',
    label: 'High load broadleaf litter',
    number: 186,
    code: 'tl6',
    depth: 0.3,
    deadMext: 0.25,
    dead1Load: 0.11019283746556473,
    dead10Load: 0.055096418732782364,
    dead100Load: 0.055096418732782364,
    totalHerbLoad: 0,
    liveStemLoad: 0,
    dead1Savr: 2000,
    liveHerbSavr: 1800,
    liveStemSavr: 1600,
    deadHeat: 8000,
    liveHeat: 8000
  }], ['187', {
    domain: 'behave',
    label: 'Large downed logs',
    number: 187,
    code: 'tl7',
    depth: 0.4,
    deadMext: 0.25,
    dead1Load: 0.013774104683195591,
    dead10Load: 0.06427915518824609,
    dead100Load: 0.371900826446281,
    totalHerbLoad: 0,
    liveStemLoad: 0,
    dead1Savr: 2000,
    liveHerbSavr: 1800,
    liveStemSavr: 1600,
    deadHeat: 8000,
    liveHeat: 8000
  }], ['188', {
    domain: 'behave',
    label: 'Long-needle litter',
    number: 188,
    code: 'tl8',
    depth: 0.3,
    deadMext: 0.35,
    dead1Load: 0.2662993572084481,
    dead10Load: 0.06427915518824609,
    dead100Load: 0.050505050505050504,
    totalHerbLoad: 0,
    liveStemLoad: 0,
    dead1Savr: 1800,
    liveHerbSavr: 1800,
    liveStemSavr: 1600,
    deadHeat: 8000,
    liveHeat: 8000
  }], ['189', {
    domain: 'behave',
    label: 'Very high load broadleaf litter',
    number: 189,
    code: 'tl9',
    depth: 0.6,
    deadMext: 0.35,
    dead1Load: 0.305325987144169,
    dead10Load: 0.1515151515151515,
    dead100Load: 0.19054178145087236,
    totalHerbLoad: 0,
    liveStemLoad: 0,
    dead1Savr: 1800,
    liveHerbSavr: 1800,
    liveStemSavr: 1600,
    deadHeat: 8000,
    liveHeat: 8000
  }], ['201', {
    domain: 'behave',
    label: 'Low load activity fuel',
    number: 201,
    code: 'sb1',
    depth: 1,
    deadMext: 0.25,
    dead1Load: 0.06887052341597796,
    dead10Load: 0.13774104683195593,
    dead100Load: 0.505050505050505,
    totalHerbLoad: 0,
    liveStemLoad: 0,
    dead1Savr: 2000,
    liveHerbSavr: 1800,
    liveStemSavr: 1600,
    deadHeat: 8000,
    liveHeat: 8000
  }], ['202', {
    domain: 'behave',
    label: 'Moderate load activity or low load blowdown',
    number: 202,
    code: 'sb2',
    depth: 1,
    deadMext: 0.25,
    dead1Load: 0.20661157024793386,
    dead10Load: 0.1951331496786042,
    dead100Load: 0.18365472910927455,
    totalHerbLoad: 0,
    liveStemLoad: 0,
    dead1Savr: 2000,
    liveHerbSavr: 1800,
    liveStemSavr: 1600,
    deadHeat: 8000,
    liveHeat: 8000
  }], ['203', {
    domain: 'behave',
    label: 'High load activity fuel or moderate load blowdown',
    number: 203,
    code: 'sb3',
    depth: 1.2,
    deadMext: 0.25,
    dead1Load: 0.2525252525252525,
    dead10Load: 0.12626262626262624,
    dead100Load: 0.13774104683195593,
    totalHerbLoad: 0,
    liveStemLoad: 0,
    dead1Savr: 2000,
    liveHerbSavr: 1800,
    liveStemSavr: 1600,
    deadHeat: 8000,
    liveHeat: 8000
  }], ['204', {
    domain: 'behave',
    label: 'High load blowdown',
    number: 204,
    code: 'sb4',
    depth: 2.7,
    deadMext: 0.25,
    dead1Load: 0.24104683195592286,
    dead10Load: 0.16069788797061524,
    dead100Load: 0.24104683195592286,
    totalHerbLoad: 0,
    liveStemLoad: 0,
    dead1Savr: 2000,
    liveHerbSavr: 1800,
    liveStemSavr: 1600,
    deadHeat: 8000,
    liveHeat: 8000
  }]])

/**
 * @file Exported BehavePlus fuel catalog accessors.
 * @version 0.1.0
 * @copyright Systems for Environmental Management 2020
 * @author Collin D. Bevins
 * @license MIT
 */
function domain (alias) {
  return model(alias).domain
}
/**
 * @return A sorted array of all the fuel catalog model Map key strings.
 */

function keys () {
  return Array.from(Alias.keys()).sort()
}
/**
 * @param {string} alias Alias map key string
 * @return Reference to the Fuel.Model with the 'alias',
 * or throws an Error if the alias does not exist.
 */

function model (alias) {
  if (!Alias.has(alias)) {
    throw new Error("Fuel catalog does not have fuel model key or alias '".concat(alias, "'"))
  }

  return Model.get(Alias.get(alias))
}
function behaveDead1Load (alias) {
  const fuel = model(alias)
  return fuel.domain === 'behave' ? fuel.dead1Load : 0
}
function behaveDead1Savr (alias) {
  const fuel = model(alias)
  return fuel.domain === 'behave' ? fuel.dead1Savr : 1
}
function behaveDead10Load (alias) {
  const fuel = model(alias)
  return fuel.domain === 'behave' ? fuel.dead10Load : 0
}
function behaveDead100Load (alias) {
  const fuel = model(alias)
  return fuel.domain === 'behave' ? fuel.dead100Load : 0
}
function behaveDeadHeat (alias) {
  const fuel = model(alias)
  return fuel.domain === 'behave' ? fuel.deadHeat : 0
}
function behaveDeadMext (alias) {
  const fuel = model(alias)
  return fuel.domain === 'behave' ? fuel.deadMext : 0.01
}
function behaveDepth (alias) {
  const fuel = model(alias)
  return fuel.domain === 'behave' ? fuel.depth : 0.01
}
function behaveLiveHeat (alias) {
  const fuel = model(alias)
  return fuel.domain === 'behave' ? fuel.liveHeat : 0
}
function behaveLiveHerbSavr (alias) {
  const fuel = model(alias)
  return fuel.domain === 'behave' ? fuel.liveHerbSavr : 1
}
function behaveLiveStemLoad (alias) {
  const fuel = model(alias)
  return fuel.domain === 'behave' ? fuel.liveStemLoad : 0
}
function behaveLiveStemSavr (alias) {
  const fuel = model(alias)
  return fuel.domain === 'behave' ? fuel.liveStemSavr : 1
}
function behaveTotalHerbLoad (alias) {
  const fuel = model(alias)
  return fuel.domain === 'behave' ? fuel.totalHerbLoad : 0
}
function chaparralDeadFraction (alias) {
  const fuel = model(alias)
  return fuel.domain === 'chaparral' ? fuel.deadFraction : 0
}
function chaparralDepth (alias) {
  const fuel = model(alias)
  return fuel.domain === 'chaparral' ? fuel.depth : 0.01
}
function chaparralFuelType (alias) {
  const fuel = model(alias)
  return fuel.domain === 'chaparral' ? fuel.fuelType : 'none'
}
function chaparralTotalLoad (alias) {
  const fuel = model(alias)
  return fuel.domain === 'chaparral' ? fuel.totalLoad : 0
}
function palmettoGallberryAge (alias) {
  const fuel = model(alias)
  return fuel.domain === 'palmettoGallberry' ? fuel.age : 0
}
function palmettoGallberryBasalArea (alias) {
  const fuel = model(alias)
  return fuel.domain === 'palmettoGallberry' ? fuel.basalArea : 0
}
function palmettoGallberryCover (alias) {
  const fuel = model(alias)
  return fuel.domain === 'palmettoGallberry' ? fuel.cover : 0
}
function palmettoGallberryHeight (alias) {
  const fuel = model(alias)
  return fuel.domain === 'palmettoGallberry' ? fuel.height : 0
}
function westernAspenCuringLevel (alias) {
  const fuel = model(alias)
  return fuel.domain === 'westernAspen' ? fuel.curingLevel : 0
}
function westernAspenFuelType (alias) {
  const fuel = model(alias)
  return fuel.domain === 'westernAspen' ? fuel.fuelType : 'none'
}

/**
 * @file Exported WFSP fuel particle equations as implemented by BehavePlus v6.
 * @copyright Systems for Environmental Management 2019
 * @author Collin D. Bevins
 * @version 0.1.0
 */
/**
 * Calculate and return a fuel particle effective heating number (fraction)
 * from a surface area-to-volume ratio (ft-1).
 *
 * The effective heating number is derived from Rothermel (1972) equation 14
 * (p 8, 26) and 77 (p 32).
 *
 * @param float savr Fuel particle surface area-to-volume ratio (ft-1).
 *
 * @return float Fuel particle effective heating number (fraction).
 */

function effectiveHeatingNumber (savr) {
  return savr <= 0 ? 0 : Math.exp(-138 / savr)
}
/**
 * Calculate and return the dead fuel particle `fine fuel load`.
 *
 * The `fine fuel load` is the portion of the fuel particle
 * load used to determine the life category fine fuel,
 * which in turn is used to determine the live category
 * moisture content of extinction.
 *
 * See Rothermel (1972) equation 88 on page 35.
 *
 * @param string life The fuel particle life category: 'dead' or 'live'.
 * @param real savr The fuel particle surface area-to-volume ratio (ft-1).
 * @param real load The fuel particle load (lb/ft2).
 *
 * @return real Fuel particle ignition fuel load (lb/ft2).
 */

function effectiveFuelLoad (savr, load, life) {
  return life === 'dead' ? effectiveFuelLoadDead(savr, load) : effectiveFuelLoadLive(savr, load)
}
function effectiveFuelLoadDead (savr, load) {
  return savr <= 0 ? 0 : load * Math.exp(-138 / savr)
} // Calculate and return the live fuel particle `fine fuel load`.

function effectiveFuelLoadLive (savr, load) {
  return savr <= 0 ? 0 : load * Math.exp(-500 / savr)
} // Calculate and return the ignition fuel water load (lb water + 1 lb fuel -1)

function effectiveFuelWaterLoad (effectiveFuelOvendryLoad, moistureContent) {
  return effectiveFuelOvendryLoad * moistureContent
}
/**
 * Calculate the fuel particle heat of pre-ignition.
 * @return real The fuel particle heat of pre-ignition (btu+1 lb-1).
 */

function heatOfPreignition (mc, efhn) {
  const qig = 250.0 + 1116.0 * mc
  return qig * efhn
}
function netOvendryLoad (ovendryFuelLoad, totalMineralContent) {
  return (1 - totalMineralContent) * ovendryFuelLoad
}
function selectByDomain (domain, behave, chaparral, palmetto, waspen) {
  if (domain === 'behave') {
    return behave
  } else if (domain === 'chaparral') {
    return chaparral
  } else if (domain === 'palmettoGallberry') {
    return palmetto
  } else if (domain === 'westernAspen') {
    return waspen
  }

  throw new Error("Unknown domain '".concat(domain, "'"))
}
/**
 * Calculate and return the fuel particle size class [0-5]
 * given its surface area-to-volume ratio (ft-1).
 *
 * The Rothermel fire spread model groups dead and down fuel particles into
 * one of 6 size classes based upon its diameter (or surface area-to-volume ratio)
 * as follows:
 *
 *<table>
 *<tr><td>Size Class</td><td>Diameter (in)</td><td>Surface Area-to-Vol</td><td>Time-lag</td></tr>
 *  <tr><td>0</td><td>0.00 - 0.04</td><td>&gt 1200</td><td>1</td></tr>
 *  <tr><td>1</td><td>0.04 - 0.25</td><td>192 - 1200</td><td>1</td></tr>
 *  <tr><td>2</td><td>0.25 - 0.50</td><td>96 - 192</td><td>10</td></tr>
 *  <tr><td>3</td><td>0.50 - 1.00</td><td>48 - 96</td><td>10</td></tr>
 *  <tr><td>4</td><td>1.00 - 3.00</td><td>16 - 48</td><td>100</td></tr>
 *  <tr><td>5</td><td>&gt 3.00</td><td>&lt 16</td><td>1000</td></tr>
 * </table>
 *
 * @param {number} savr Fuel particle surface area-to-volume ratio (ft-1).
 *
 * @return {integer} Fuel particle size class [0..5].
 */

function sizeClass (savr) {
  let size = 5 // 3.00+ "

  if (savr >= 1200.0) {
    // 0.00 - 0.04"
    size = 0
  } else if (savr >= 192.0) {
    // 0.04 - 0.25"
    size = 1
  } else if (savr >= 96.0) {
    // 0.25 - 0.50"
    size = 2
  } else if (savr >= 48.0) {
    // 0.50 - 1.00"
    size = 3
  } else if (savr >= 16.0) {
    // 1.00 - 3.00"
    size = 4
  }

  return size
}
function sizeClassWeightingFactor (size, swtgArray) {
  return swtgArray[size]
}
/**
 * Calculate and return the fuel particle surface area (ft+2)
 * given its load (lb+1 ft-2), surface area-to-volume ratio (ft-1),
 * and fiber density (lb+1 ft-3).
 *
 * @param float load Fuel particle load (lb+1 ft-2).
 * @param float savr Fuel particle surface area-to-volume ratio (ft-1).
 * @param float density Fuel particle fiber density (lb+1 ft-3).
 *
 * @return float Fuel particle surface area (ft+2).
 */

function surfaceArea (load, savr, dens) {
  return divide(load * savr, dens)
}
function surfaceAreaWeightingFactor (area, catArea) {
  return fraction(divide(area, catArea))
}
/**
 * Calculate and return the fuel particle volume (ft3/ft2)
 * given its a load (lb/ft2) and fiber density (lb/ft3).
 *
 * @param {number} load Fuel particle ovendry load (lb/ft2).
 * @param {number} dens Fuel particle fiber density (lb/ft3).
 *
 * @return float Fuel particle volume per square foot of fuel bed (ft3/ft2).
 */

function volume (load, dens) {
  return divide(load, dens)
}

/**
 * @file Exported WFSP surface fire and lightning strike ignition probability equations
 * as described by Latham () as described by Albini (1998) and
 * as implemented by BehavePlus v6.
 * @copyright Systems for Environmental Management 2019
 * @author Collin D. Bevins <cbevins@montana.com>
 * @version 0.1.0
 */
/**
 * Calculates the probability of a surface fire firebrand starting a fire.
 *
 * @param {number} fuelTemperature  Dead surface fuel temperature (oF).
 * @param {number} fuelMoisture     Dead 1-hour time-lag surface fuel moisture content (lb/lb).
 * @return Probability of a firebrand starting a fire [0..1].
 */

function firebrand (fuelTemperature, fuelMoisture) {
  const c = (fuelTemperature - 32) * 5 / 9
  const qign = Math.min(144.51 - 0.266 * c - 0.00058 * c * c - c * fuelMoisture + 18.54 * (1 - Math.exp(-15.1 * fuelMoisture)) + 640 * fuelMoisture, 400)
  const x = 0.1 * (400 - qign)
  return fraction(0.000048 * Math.pow(x, 4.3) / 50)
}
/**
 * Calculates the fuel temperature using the BEHAVE FIRE2 subroutine CAIGN() algorithm.
 *
 *  @param airTemp        Air temperature (oF).
 *  @param shadeFraction  Fraction of sun shaded from the fuel.
 *  @return Fuel temperature (oF).
 */

function fuelTemperature (airTemp, shadeFraction) {
  const xincr = 25 - 20 * shadeFraction
  return airTemp + xincr
} // Probability of a continuing current by charge type (Latham)

const ccNeg = 0.2
const ccPos = 0.9
const lightningData = {
  ponderosaPineLitter: {
    label: 'Ponderosa pine litter',
    positive: function positive (arg) {
      return ccPos * (0.92 * Math.exp(-0.087 * arg.moisture))
    },
    negative: function negative (arg) {
      return ccNeg * (1.04 * Math.exp(-0.054 * arg.moisture))
    }
  },
  punkyWoodRottenChunky: {
    label: 'Punky wood, rotten, chunky',
    positive: function positive (arg) {
      return ccPos * (0.44 * Math.exp(-0.11 * arg.moisture))
    },
    negative: function negative (arg) {
      return ccNeg * (0.59 * Math.exp(-0.094 * arg.moisture))
    }
  },
  punkyWoodPowderDeep: {
    label: 'Punky wood powder, deep (4.8 cm)',
    positive: function positive (arg) {
      return ccPos * (0.86 * Math.exp(-0.06 * arg.moisture))
    },
    negative: function negative (arg) {
      return ccNeg * (0.9 * Math.exp(-0.056 * arg.moisture))
    }
  },
  punkyWoodPowderShallow: {
    label: 'Punk wood powder, shallow (2.4 cm)',
    positive: function positive (arg) {
      return ccPos * (0.6 - 0.011 * arg.moisture)
    },
    negative: function negative (arg) {
      return ccNeg * (0.73 - 0.011 * arg.moisture)
    }
  },
  lodgepolePineDuff: {
    label: 'Lodgepole pine duff',
    positive: function positive (arg) {
      return ccPos * (1 / (1 + Math.exp(5.13 - 0.68 * arg.depth)))
    },
    negative: function negative (arg) {
      return ccNeg * (1 / (1 + Math.exp(3.84 - 0.6 * arg.depth)))
    }
  },
  douglasFirDuff: {
    label: 'Douglas-fir duff',
    positive: function positive (arg) {
      return ccPos * (1 / (1 + Math.exp(6.69 - 1.39 * arg.depth)))
    },
    negative: function negative (arg) {
      return ccNeg * (1 / (1 + Math.exp(5.48 - 1.28 * arg.depth)))
    }
  },
  highAltitudeMixed: {
    label: 'High altitude mixed (mainly Engelmann spruce)',
    positive: function positive (arg) {
      return ccPos * (0.62 * Math.exp(-0.05 * arg.moisture))
    },
    negative: function negative (arg) {
      return ccNeg * (0.8 - 0.014 * arg.moisture)
    }
  },
  peatMoss: {
    label: 'Peat moss (commercial)',
    positive: function positive (arg) {
      return ccPos * (0.71 * Math.exp(-0.07 * arg.moisture))
    },
    negative: function negative (arg) {
      return ccNeg * (0.84 * Math.exp(-0.06 * arg.moisture))
    }
  }
}
const LightningCharges = ['negative', 'positive', 'unknown']
const LightningFuels = Object.keys(lightningData)
/**
 * Calculates the probability of a lightning strike starting a fire.
 *
 *  @param fuelType Ignition fuel bed type:
 *  @param depth    Ignition fuel (duff & litter) bed depth (inches).
 *  @param duffMoisture Ignition fuel (duff & litter 100-h) moisture content (lb/lb).
 *  @param chargeType Lightning charge, one of 'positive', 'negative', or 'unknown'
 *  @return Probability of the lightning strike starting a fire [0..1].
 *
 *  \note  The following assumptions are made by Latham:
 *  - 20% of negative flashes have continuing current
 *  - 90% of positive flashes have continuing current
 *  - Latham and Schlieter found a relative frequency of
 *    0.723 negative and 0.277 positive strikes
 *  - Unknown strikes are therefore p = 0.1446 neg + 0.2493 pos
 */

function lightningStrike (fuelType, depth, moisture, chargeType) {
  // Convert duff depth to cm and restrict to maximum of 10 cm.
  // Convert duff moisture to percent and restrict to maximum of 40%.
  const args = {
    depth: Math.min(30.48 * depth, 10),
    moisture: Math.min(100 * moisture, 40)
  } // If 'positive' or 'negative'...

  if (chargeType === 'positive' || chargeType === 'negative') {
    return fraction(lightningData[fuelType][chargeType](args))
  } // Otherwise, return a positive/negative frequency-weighted value using
  // Latham and Schlieter's relative frequency of a continuing current by charge type

  const freqNeg = 0.723
  const freqPos = 0.277
  const pos = fraction(lightningData[fuelType].positive(args))
  const neg = fraction(lightningData[fuelType].negative(args))
  return fraction(freqPos * pos + freqNeg * neg)
}

/**
 * @file Exported WFSP palmetto-gallberry dynamic fuel model equations
 * as described by Hough and Albini (1978) and as implemented by BehavePlus V6.
 * @version 0.1.0
 * @copyright Systems for Environmental Management 2020
 * @author Collin D. Bevins <cbevins@montana.com>
 * @license MIT
 */

function deadFineLoad (age, ht) {
  return positive(-0.00121 + 0.00379 * Math.log(age) + 0.00118 * ht * ht)
} // dead 0.25 to 1 inch

function deadSmallLoad (age, cover) {
  return positive(-0.00775 + 0.00021 * cover + 0.00007 * age * age)
} // dead foliage

function deadFoliageLoad (age, cover) {
  return 0.00221 * Math.pow(age, 0.51263) * Math.exp(0.02482 * cover)
} // L layer

function deadLitterLoad (age, basalArea) {
  return (0.03632 + 0.0005336 * basalArea) * (1.0 - Math.pow(0.25, age))
}
function fuelDepth$1 (ht) {
  return Math.max(0.01, 2.0 * ht / 3.0)
} // live 0 to 0.25 inch

function liveFineLoad (age, ht) {
  return positive(0.00546 + 0.00092 * age + 0.00212 * ht * ht)
} // live 0.25 to 1 inch

function liveSmallLoad (age, ht) {
  return positive(-0.02128 + 0.00014 * age * age + 0.00314 * ht * ht)
} // live foliage

function liveFoliageLoad (age, cover, ht) {
  return positive(-0.0036 + 0.00253 * age + 0.00049 * cover + 0.00282 * ht * ht)
}

/**
 * @file Exported WFSP equations for spotting distance from a burning pile,
 * torching trees, and surface fire as implemented by BehavePlus V6.
 * @version 0.1.0
 * @copyright Systems for Environmental Management 2020
 * @author Collin D. Bevins
 * @license MIT
 */
// Spot distance terrain location parameters
const Location = {
  midslopeWindward: {
    factor: 0,
    label: 'Midslope, Windward'
  },
  valleyBottom: {
    factor: 1,
    label: 'Valley Bottom'
  },
  midslopeLeeward: {
    factor: 2,
    label: 'Midslope, Leeward'
  },
  ridgeTop: {
    factor: 3,
    label: 'Ridge Top'
  }
}
const locations = function locations () {
  return Object.keys(Location)
}
/**
 * Torching tree spotting distance supported species parameters
 *
 * The primary key is the 4-5 character FOFEM5 genus-species code.
 * The tree species properties are:
 * - common: common name,
 * - scientific: scientific name,
 * - height: flame height computation parameter,
 * - duration: flame duration computation parameter,
 */

const TorchingTreeSpecies = ['ABBA', 'ABGR', 'ABLA', 'PICO', 'PIEC2', 'PIEL', 'PIEN', 'PIMO3', 'PIPA2', 'PIPO', 'PISE', 'PITA', 'PSME', 'TSHE', 'LAOC', 'THPL']
const TorchingSteadyFlame = {
  ABBA: {
    common: 'balsam fir',
    scientific: 'Abies balsamea',
    height: [16.5, 0.515],
    duration: [10.7, -0.278]
  },
  ABGR: {
    common: 'grand fir',
    scientific: 'Abies grandis',
    height: [16.5, 0.515],
    duration: [10.7, -0.278]
  },
  ABLA: {
    common: 'subalpine fir',
    scientific: 'Abies lasiocarpa',
    height: [15.7, 0.451],
    duration: [10.7, -0.278]
  },
  PICO: {
    common: 'lodgepole pine',
    scientific: 'Pinus contorta',
    height: [12.9, 0.453],
    duration: [12.6, -0.256]
  },
  PIEC2: {
    common: 'shortleaf pine',
    scientific: 'Pinus echinata',
    height: [2.71, 1.0],
    duration: [7.91, -0.344]
  },
  PIEL: {
    common: 'slash pine',
    scientific: 'Pinus elliottii',
    height: [2.71, 1.0],
    duration: [11.9, -0.389]
  },
  PIEN: {
    common: 'Engelmann spruce',
    scientific: 'Picea engelmannii',
    height: [15.7, 0.451],
    duration: [12.6, -0.256]
  },
  PIMO3: {
    common: 'western white pine',
    scientific: 'Pinus monticola',
    height: [12.9, 0.453],
    duration: [10.7, -0.278]
  },
  PIPA2: {
    common: 'longleaf pine',
    scientific: 'Pinus palustrus',
    height: [2.71, 1.0],
    duration: [11.9, -0.389]
  },
  PIPO: {
    common: 'ponderosa pine',
    scientific: 'Pinus ponderosa',
    height: [12.9, 0.453],
    duration: [12.6, -0.256]
  },
  PISE: {
    common: 'pond pine',
    scientific: 'Pinus serotina',
    height: [2.71, 1.0],
    duration: [7.91, -0.344]
  },
  PITA: {
    common: 'loblolly pine',
    scientific: 'Pinus taeda',
    height: [2.71, 1.0],
    duration: [13.5, -0.544]
  },
  PSME: {
    common: 'Douglas-fir',
    scientific: 'Pseudotsuga menziesii',
    height: [15.7, 0.451],
    duration: [10.7, -0.278]
  },
  TSHE: {
    common: 'western hemlock',
    scientific: 'Tsuga heterophylla',
    height: [15.7, 0.451],
    duration: [6.3, -0.249]
  },
  // This is an estimated guess,
  // using the height parms used by PICO, PIPO, and PIMO3
  // and the duration parms used by TSHE
  LAOC: {
    common: 'western larch',
    scientific: '"Larix occidentalis (guess)',
    height: [12.9, 0.453],
    duration: [6.3, -0.249]
  },
  // This is an estimated guess,
  // using the height parms used by ABLA, PIEN, PSME, and TSHE
  // and the duration parms used by PICO, PIEN, and PIPO
  THPL: {
    scientific: 'Thuja plicata',
    common: 'western red cedar (guess)',
    height: [15.7, 0.451],
    duration: [12.6, -0.256]
  }
}
/**
 * Adjusts down-wind canopy height based upon down-wind canopy cover
 * Added in BP6 by Issue #028FAH - Downwind Canopy Open/Closed
 *
 * @param {real} downWindCoverHt (ft+1)
 * @param {real} downWindCanopyIsOpen TRUE if down-wind canopy is open
 */

function appliedDownWindCoverHeight (downWindCoverHt, downWindCanopyIsOpen) {
  return downWindCanopyIsOpen ? 0.5 * downWindCoverHt : downWindCoverHt
}
/**
 * \brief Calculates maximum firebrand height (ft+1)
 * from a burning pile
 *
 * \param flameHt Flame height (ft+1) from the burning pile
 * \return Maximum firebrand height (ft+1) from a burning pile
 */

function burningPileFirebrandHeight (flameHt) {
  return Math.max(0.0, 12.2 * flameHt)
}
/**
 * \brief Calculates minimum value of cover height
 * used in calculation of flat terrain spotting distance
 * using logarithmic variation with height.
 *
 * Used for burning pile and surface fire spotting distances.
 *
 * \param firebrandHt Maximum firebrand height (ft+1)
 * \param appliedDownWindCoverHeight Adjusted down-wind canopy height
 *   based upon down-wind canopy cover (ft+1)
 * \return Minimum value of cover ht (ft+1) used in calculation
 * of flat terrain spotting distance.
 */

function criticalCoverHeight (firebrandHt, appliedDownWindCoverHeight) {
  const criticalHt = firebrandHt > 0 ? 2.2 * Math.pow(firebrandHt, 0.337) - 4 : 0
  return Math.max(appliedDownWindCoverHeight, criticalHt)
}
/**
 * \brief Calculates maximum spotting distance over flat terrain
 * for burning piles, torching trees, and surface fires.
 *
 * \param firebrandHt Maximum firebrand height (ft+1)
 * \param criticalCoverHeight Downwind tree/vegetation cover height (ft)
 * \param u20 Wind speed at 20 ft (ft+1 min-1)
 *
 * \return Maximum spotting distance (ft+1) over flat terrain
 */

function distanceFlatTerrain (firebrandHt, criticalCoverHeight, u20) {
  // Wind speed must be converted to mi/h
  return criticalCoverHeight <= 0 || firebrandHt <= 0 ? 0 : 5280 * 0.000718 * (u20 / 88) * Math.sqrt(criticalCoverHeight) * (0.362 + Math.sqrt(firebrandHt / criticalCoverHeight) / 2 * Math.log(firebrandHt / criticalCoverHeight))
}
function distanceFlatTerrainWithDrift (flatDistance, drift) {
  return flatDistance + drift
}
/*
 * \brief Calculates maximum spotting distance adjusted for mountain terrain.
 *
 * \param flatDistFt Maximum spotting distance over flat terrain (ft+1).
 * \param locationKey location property name
 *  ('midslopeWindward', 'valleyBottom', 'midslopeLeeward', 'ridgetop').
 * \param rvDist Horizontal distance from ridge top to valley bottom (ft+1).
 * \param rvElev Vertical distance from ridge top to valley bottom (ft+1).
 *
 * \return Maximum spotting distance (ft+1) over mountainous terrain
 */

function distanceMountainTerrain (flatDistFt, locationKey, rvDistFt, rvElev) {
  const flatDist = flatDistFt / 5280
  const rvDist = rvDistFt / 5280
  let mtnDist = flatDist

  if (rvElev > 0 && rvDist > 0) {
    const a1 = flatDist / rvDist
    const b1 = rvElev / (10 * Math.PI) / 1000
    const factor = Location[locationKey].factor
    let x = a1

    for (let i = 0; i < 6; i++) {
      x = a1 - b1 * (Math.cos(Math.PI * x - factor * Math.PI / 2) - Math.cos(factor * Math.PI / 2))
    }

    mtnDist = x * rvDist
  }

  return mtnDist * 5280
}
/**
 * Calculates surface fire firebrand down-wind drift distance (ft+1).
 * @param {real} firebrandHt  Firebrand loft hight (ft+1)
 * @param {real} u20 Wind speed at 20-ft (ft+1 min-1).
 */

function surfaceFireFirebrandDrift (firebrandHt, u20) {
  return firebrandHt <= 0 ? 0 : 5280 * 0.000278 * (u20 / 88) * Math.pow(firebrandHt, 0.643)
}
/**
 * \brief Calculates maximum firebrand height (ft+1) from a surface fire
 *
 * \param firelineIntensity Surface fireline intensity (btu+1 ft-1 s-1)
 * \param u20 Wind speed at 20-ft (ft+1 min-1)
 *
 * \return Maximum firebrand height (ft+1)
 */

function surfaceFireFirebrandHeight (firelineIntensity, u20) {
  if (u20 > 0 && firelineIntensity > 0) {
    // f is a function relating thermal energy to windspeed.
    const f = 322 * Math.pow(0.474 * (u20 / 88), -1.01) // Initial firebrand height (ft).

    return 1.055 * Math.sqrt(f * firelineIntensity)
  }

  return 0
}
/**
 * Torching trees firebrand ht (ft+1)
 *
 * \param treeHt Tree height (ft+1) of the torching trees
 * \param flameHt Steady flame height (ft+1) of the toching trees
 *  as calculated by torchingTreesSteadyFlameHeight()
 * \param flameDur Steady flame duration (min+1) of the toching trees
 *  as calculated by torchingTreesSteadyFlameDuration()
 *
 * \return Maximum firebrand height (ft+1)
 */

function torchingTreesFirebrandHeight (treeHt, flameHt, flameDur) {
  const parms = [{
    a: 4.24,
    b: 0.332
  }, {
    a: 3.64,
    b: 0.391
  }, {
    a: 2.78,
    b: 0.418
  }, {
    a: 4.7,
    b: 0.0
  }]
  const ratio = flameHt <= 0 ? 0 : treeHt / flameHt
  let idx = 3

  if (ratio >= 1) {
    idx = 0
  } else if (ratio >= 0.5) {
    idx = 1
  } else if (flameDur < 3.5) {
    idx = 2
  }

  return parms[idx].a * Math.pow(flameDur, parms[idx].b) * flameHt + 0.5 * treeHt
}
/**
 * \brief Calculates steady state flame duration (min+1) of the toching trees
 *
 * \param species Species label of the torching trees
 * \param dbh Dbh of the torching trees (in+1)
 * \param trees Number of torching trees
 *
 * \return Flame duration (min+1) of torching trees
 */

function torchingTreesSteadyFlameDuration (species, dbh, trees) {
  return TorchingSteadyFlame[species].duration[0] * Math.pow(dbh, TorchingSteadyFlame[species].duration[1]) * Math.pow(trees, -0.2)
}
/**
 * \brief Calculates steady state flame height (ft+1) of the torching trees
 *
 * \param species Species label of the torching trees
 * \param dbh Dbh (in+1) of the torching trees
 * \param trees Number of torching trees
 * \return Steady state flame height (ft+1) of the torching trees
 */

function torchingTreesSteadyFlameHeight (species, dbh, trees) {
  return TorchingSteadyFlame[species].height[0] * Math.pow(dbh, TorchingSteadyFlame[species].height[1]) * Math.pow(trees, 0.4)
}

/**
 * @file Class of export function surface fire methods per Rothermel 1972.
 *
 * Library of algorithms implementing the Rothermel (1972) mathematical model
 * of surface fire spread rate and direction of maximum spread from upslope.
 *
 * It also includes a few of the fundamental Byram and Thomas equations for
 * fireline intensity, flame length, and scorch height.  All equations
 * relating to fire elliptical growth are in BpxLibFireEllipse.
 *
 * All algorithms in this class are implemented as pure export function methods,
 * returning a single property.
 *
 * @author Collin D. Bevins <cbevins@montana.com>
 * @copyright 2019 Systems for Environmental Management
 * @license MIT
 **/
function arithmeticMeanSpreadRate (cover1, ros1, ros2) {
  return cover1 * ros1 + (1 - cover1) * ros2
}
/**
 * Calculate the `effective wind speed` of a combined slope-plus-wind spread rate coefficient.
 *
 * The `effective` wind speed is the theoretical wind speed that yields the same
 * spread rate coefficient as the combined slope-plus-wind spread rate coefficient.
 *
 * @param phiew The sum of the slope and wind coefficients.
 * @param windB Fuel bed wind factor B.
 * @param windI Fuel bed wind factor I.
 * @return The effective wind speed for the slope-plus-wind coefficient (ft+1 min-1).
 */

function effectiveWindSpeed (phiew, windB, windI) {
  let ews = 0

  if (phiew > 0 && windB > 0 && windI > 0) {
    const a = phiew * windI
    const b = 1.0 / windB
    ews = Math.pow(a, b)
  }

  return ews
}
/**
 * Calculate the effective wind speed (ft+1 min-1) from the length-to-width ratio.
 *
 * This uses Anderson's (1983) equation.
 *
 * @param lwr The fire ellipse length-to-width ratio (ratio).
 * @return The effective wind speed (ft+1 min-1).
 */

function effectiveWindSpeedFromLwr (lwr) {
  return 88 * (4 * (lwr - 1))
}
/**
 * Calculate the maximum effective wind speed limit
 * as per Rothermel (1972) equation 86 on page 33.
 *
 * @param rxi Fire reaction intensity (btu+1 ft-2 min-1).
 * @return The maximum effective wind speed limit (ft+1 min-1).
 */

function effectiveWindSpeedLimit (rxi) {
  return 0.9 * rxi
}
function expectedValueSpreadRateMOCK (cover1, ros1, ros2) {
  return 0.5 * (arithmeticMeanSpreadRate(cover1, ros1, ros2) + harmonicMeanSpreadRate(cover1, ros1, ros2))
}
/**
 * Calculate the fire heading direction (degrees clockwise from north).
 *
 * @param upslopeFromNorth Upslope direction (degrees clockwise from north).
 * @param headingFromUpslope Fire heading direction (degrees clockwise from the upslope direction).
 * @return The fire heading direction (degrees clockwise from north).
 */
// export function headingFromNorth(upslopeFromNorth, headingFromUpslope) {
//   return compass.constrain(upslopeFromNorth + headingFromUpslope)
// }

/**
 * Calculate the fireline intensity (btu+1 ft-1 s-1) from spread rate,
 * reaction intensity, and residence time.
 *
 * @param ros The fire spread rate (ft+1 min-1).
 * @param rxi The reaction intensity (btu+1 ft-2 min-1).
 * @param taur The flame residence time (min+1)
 * @return The fireline intensity (btu+1 ft-1 s-1).
 */

function firelineIntensity (ros, rxi, taur) {
  return ros * rxi * taur / 60
}
/**
 * Calculate the fireline intensity (btu+1 ft-1 s-1) from flame length.
 *
 * @param flame The flame length (ft+1).
 * @return The fireline intensity (btu+1 ft-1 s-1).
 */

function firelineIntensityFromFlameLength (flame) {
  return flame <= 0 ? 0 : Math.pow(flame / 0.45, 1 / 0.46)
}
/**
 * Calculate Byram's (1959) flame length (ft+1) given a fireline intensity.
 *
 * @param fli Fireline intensity (btu+1 ft-1 s-1).
 * @return Byram's (1959) flame length (ft+1).
 */

function flameLength (fli) {
  return fli <= 0 ? 0 : 0.45 * Math.pow(fli, 0.46)
}
function harmonicMeanSpreadRate (cover1, ros1, ros2) {
  if (cover1 === 0 || ros1 === 0) {
    return ros2
  } else if (ros2 === 0) {
    return ros1
  }

  return 1 / (cover1 / ros1 + (1 - cover1) / ros2)
}
/**
 * Calculate the fire ellipse length-to-width ratio from the
 * effective wind speed (ft+1 min-1).
 *
 * This uses Anderson's (1983) equation.
 *
 * @param effectiveWindSpeed The effective wind speed (ft+1 min-1).
 * @return The fire ellipse length-to-width ratio (ratio).
 */

function lengthToWidthRatio$1 (effectiveWindSpeed) {
  // Wind speed MUST be in miles per hour
  return 1 + 0.25 * (effectiveWindSpeed / 88)
}
/**
 * Calculate the maximum fire spread rate under slope & wind conditions.
 *
 * @param ros0 No-wind, no-slope spread rate (ft+1 min-1).
 * @param phiEw Rothermel's (1972) `phiEw` wind-slope coefficient (ratio).
 * @return The maximum fire spread rate (ft+1 min-1).
 */

function maximumSpreadRate (ros0, phiEw) {
  return ros0 * (1 + phiEw)
}
/**
 * Calculate the wind-slope coefficient (phiEw = phiW + phiS)
 * from the individual slope (phiS) and wind (phiW) coefficients.
 *
 * @param phiW Rothermel (1972) wind coefficient `phiW` (ratio)
 * @param phiS Rothermel (1972) slope coefficient `phiS` (ratio)
 * @return Rothermel's (1972) wind-slope coefficient `phiEw` (ratio).
 */

function phiEffectiveWind (phiW, phiS) {
  return phiW + phiS
}
/**
 * Calculate the wind-slope coefficient (phiEw = phiW + phiS)
 * from the no-wind, no-slope spread rate and an actual spread rate.
 *
 * There are 3 ways to calculate the wind-slope coefficient `phiEw`:
 * - from `phiS` and `phiW`: see phiEw(phiS,phiW)
 * - from `ros0` and `rosHead`: see phiEwInferred(ros0,rosHead)
 * - from `ews`, `windB`, and `windK`: see phiEwFromEws(ews, windB, windK)
 *
 * @param ros0 No-wind, no-slope spread rate (ft+1 min-1).
 * @param rosHead The actual spread rate (ft+1 min-1) at the fire head
 *    (possibly under cross-slope wind conditions).
 * @return Rothermel's (1972) wind-slope coefficient `phiEw` (ratio).
 */

function phiEffectiveWindInferred (ros0, rosHead) {
  return ros0 <= 0 ? 0 : rosHead / ros0 - 1
}
/**
 * Calculate the wind-slope coefficient (phiEw = phiW + phiS)
 * from the effective wind speed.
 *
 * There are 3 ways to calculate the wind-slope coefficient `phiEw`:
 * - from `phiS` and `phiW`: see phiEw(phiS,phiW)
 * - from `ros0` and `rosHead`: see phiEwInferred(ros0,rosHead)
 * - from `ews`, `windB`, and `windK`: see phiEwFromEws(ews, windB, windK)
 *
 * @param ews The theoretical wind speed that produces
 *  the same spread rate coefficient as the current slope-wind combination.
 * @param windB
 * @param windK
 * @return Rothermel's (1972) wind-slope coefficient `phiEw` (ratio).
 */

function phiEwFromEws (ews, windB, windK) {
  return ews <= 0 ? 0 : windK * Math.pow(ews, windB)
}
/** Calculate the fire spread rate slope coefficient (ratio).
 *
 * This returns Rothermel's (1972) `phiS' as per equation 51 (p 24, 26).
 *
 * @param slopeRatio Slope steepness ratio (vertical rise / horizontal reach).
 * @param slopeK Fuel Bed slope factor.
 * @return The fire spread rate slope coefficient (ratio).
 */

function phiSlope (slopeRatio, slopeK) {
  return slopeK * slopeRatio * slopeRatio
}
/** Calculate the fire spread rate wind coefficient (ratio).
 *
 * This returns Rothermel's (1972) `phiW' as per equation 47 (p 23, 26).
 *
 * @param midflameWind Wind speed at midflame height (ft+1 min-1).
 * @param windB Fuel Bed wind factor `B`.
 * @param windK Fuel Bed wind factor `K`.
 * @return The fire spread rate wind coefficient (ratio).
 */

function phiWind (midflameWind, windB, windK) {
  return midflameWind <= 0 ? 0 : windK * Math.pow(midflameWind, windB)
}
/**
 * Calculate the maximum fire spread rate under cross-slope wind conditions.
 *
 * If the wind is blowing up-slope (or, if there is no slope, or if there is no wind),
 * then spreadRateMaximumUpSlopeWind() == spreadRateMaximumCrossSlopeWind().
 *
 * @param ros0 No-wind, no-slope spread rate (ft+1 min-1).
 * @param spreadDirVectorRate Additional spread reate (ft+1 min-1)
 *    along the cross-slope vector of maximum spread.
 * @return The maximum fire spread rate (ft+1 min-1).
 */

function spreadRateWithCrossSlopeWind (ros0, spreadDirVectorRate) {
  return ros0 + spreadDirVectorRate
}
/**
 * Calculate the maximum spread rate after applying the effective wind speed limit.
 *
 * If the effective wind speed does not exceed the limit,
 * then spreadRateMaximumCrossSlopeWind() == spreadRateMaximumEffectiveWindSpeedLimitApplied().
 *
 * @param ros0 The no-wind, no-slope spread rate (ft+1 min-1).
 * @param phiEwLimited Rothermel's (1972) `phiEw` wind-slope coefficient (ratio)
 * AFTER applying the effective wind speed limit.
 */
// export function rosMaxEwslApplied(ros0, phiEwLimited) {
//   return ros0 * (1 + phiEwLimited)
// }

/**
 * Calculate the maximum spread rate after applying the effective wind speed upper limit.
 *
 * If the spread rate exceeds the effective wind speed
 * AND the effective wind speed exceeds 1 mph, then the
 * spread rate is reduced back to the effective wind speed.
 *
 * @param rosMax The fire maximum spread rate (ft+1 min-1)
 * @param ews The effective wind speed (ft+1 min-1).
 * @return The maximum spread rate (ft+1 min-1) after applying any effective wind speed limit.
 */

function spreadRateWithRosLimitApplied (rosMax, ews) {
  return rosMax > ews && ews > 88 ? ews : rosMax
}
/**
 * Calculate the scorch height (ft+1) estimated from Byram's fireline
 * intensity, wind speed, and air temperature.
 *
 * @param fli Byram's fireline intensity (btu+1 ft-1 s-1).
 * @param windSpeed Wind speed (ft+1 min-1).
 * @param airTemp (oF).
 * @return The scorch height (ft+1).
 */

function scorchHeight (fli, windSpeed, airTemp) {
  const mph = windSpeed / 88
  return fli <= 0 ? 0 : 63 / (140 - airTemp) * Math.pow(fli, 1.166667) / Math.sqrt(fli + mph * mph * mph)
}
/**
 * Calculate the direction of maximum spread as degrees clockwise from up-slope.
 *
 * @param xComp Vector x-component returned by spreadDirectionXComponent()
 * @param yComp Vector y-component as returned by spreadDirectionYComponent().
 * @param rosv Spread rate in the vector of maximum spread (ft+1 min-1).
 * @return The direction of maximum fire spread (degrees from upslope)
 */

function spreadDirectionFromUpslope (xComp, yComp, rosv) {
  const pi = Math.PI
  const al = rosv <= 0 ? 0 : Math.asin(Math.abs(yComp) / rosv)
  const radians = xComp >= 0 ? yComp >= 0 ? al : pi + pi - al : yComp >= 0 ? pi - al : pi + al
  const degrees = radians * 180 / pi
  return degrees
}
/**
 * Calculate the slope contribution to the spread rate.
 *
 * @param ros0 No-wind, no-wlope fire spread rate (ft+1 min-1)
 * @param phiS Slope coefficient (factor)
 * @return The slope contribution to the fire spread rate (ft+1 min-1)
 */

function maximumDirectionSlopeSpreadRate (ros0, phiS) {
  return ros0 * phiS
}
/**
 * Calculate the wind contribution to the spread rate.
 *
 * @param ros0 No-wind, no-wlope fire spread rate (ft+1 min-1)
 * @param phiW Wind coefficient (factor)
 * @return The wind contribution to the fire spread rate (ft+1 min-1)
 */

function maximumDirectionWindSpreadRate (ros0, phiW) {
  return ros0 * phiW
}
/**
 * Calculate the additional spread rate (ft+1 min-1) in the direction of maximum
 * spread under cross-slope wind condtions.
 *
 * @param xComp Vector x-component returned by spreadDirXComp()
 * @param yComp Vector y-component as returned by spreadDirYComp().
 * @return Cross wind - cross slope spread rate (ft+1 min-1)
 */

function maximumDirectionSpreadRate (xComp, yComp) {
  return Math.sqrt(xComp * xComp + yComp * yComp)
}
/**
 * Calculate the x-component of the spread rate vector under cross-slope wind conditions.
 *
 * @param windRate
 * @param slopeRate
 * @param windHdgAzUp Wind heading in degrees clockwise from the up-slope direction.
 */

function maximumDirectionXComponent (windRate, slopeRate, windHdgAzUp) {
  const radians = windHdgAzUp * Math.PI / 180
  return slopeRate + windRate * Math.cos(radians)
}
/**
 * Calculate the y-component of the spread rate vector under cross-slope wind conditions.
 *
 * @param windRate
 * @param windHdgAzUp Wind heading in degrees clockwise from the up-slope direction.
 */

function maximumDirectionYComponent (windRate, windHdgAzUp) {
  const radians = windHdgAzUp * Math.PI / 180
  return windRate * Math.sin(radians)
}
/**
 * Calculates the midflame wind speed required to attain a target fire spread rate.
 *
 * @param rosTarget Target fire spread rate (ft+1 min-1)
 * @param ros0 The fuel bed no-wind, no-slope fire spread rate (ft+1 min-1)
 * @param windB The fuel bed wind factor B
 * @param windK The fuel bed wind factor K
 * @param phiS The fuel bed slope coefficient (phi slope)
 * @return The midflame wind speed (ft+1 min-1) required to attain the target fire spread rate.
 */
// export function windSpeedAtRosTarget(rosTarget, ros0, windB, windK, phiS) {
//   if (ros0 <= 0 || windK <= 0) {
//     return 0
//   }
//   const numerator = (rosTarget / ros0) - 1 - phiS
//   const term = numerator / windK
//   return Math.pow(term, (1/windB))
// }

/**
 * Calculates the midflame wind speed required to attain a target fire spread rate.
 *
 * @param rosTarget Target fire spread rate (ft+1 min-1)
 * @param ros0 The fuel bed no-wind, no-slope fire spread rate (ft+1 min-1)
 * @param beta The fuel bed packing ratio
 * @param bedSavr The fuel bed characteristic surface area-to-volume ratio (ft-1)
 * @param slopeRatio The fuel bed slope (ratio)
 * @return The midflame wind speed (ft+1 min-1) required to attain the target fire spread rate.
 */
// export function windSpeedAtRosTarget2(rosTarget, ros0, beta, bedSavr, slopeRatio) {
//   const windB = BpxLibFuelBed.windB(bedSavr)
//   const windC = BpxLibFuelBed.windC(bedSavr)
//   const windE = BpxLibFuelBed.windE(bedSavr)
//   const betaOpt = BpxLibFuelBed.beto(bedSavr)
//   const betaRatio = beta / betaOpt
//   const windK = BpxLibFuelBed.windK(betaRatio, windE, windC)
//   const slopeK = BpxLibFuelBed.slopeK(beta)
//   const phiS = BpxLibSurfaceFire.phiS(slopeRatio, slopeK)
//   return BpxLibSurfaceFire.windSpeedAtRosTarget(rosTarget, ros0, windB, windK, phiS)
// }

/**
 * @file Exported WFSP tree mortality data as implemented by BehavePlus V6 and FOFEM v6.
 * @version 0.1.0
 * @copyright Systems for Environmental Management 2020
 * @author Collin D. Bevins <cbevins@montana.com>
 * @license MIT
 */
// ------------------------------------------------------------------------------
//  FOFEM tree species and equations
//  These are used in the bark thickness and tree mortality functions.
//
//  NOTE: FOFEM v6 introduced new species codes for all species, and also
// introduced 13 new species and dropped 2 other species.
//
// The FOFEM 6 genus-species abbreviations are the object key.
//  The species object properties are:
//  - 'fofem5' FOFEM 5 genus-species codes (deprecated),
//  - 'mortEq' Index to mortality equation (base 1): 1, 3, and 10-20
//      - Through BP5, there were only mortality equations 1 and 3.
//      - BP6 introduces mortality equations 10 through 20.
//  - 'barkEq' Index to single bark thickness equation (base 1)
//  - 'regions' Region list (any combination of 1, 2, 3, and/or 4, where
//      - 1 = Interior West,
//      - 2 = Pacific West,
//      - 3 = NorthEast,
//      - 4 = SouthEast).
//  - 'scientific' Scientific name
//  - 'common' Common name
// ------------------------------------------------------------------------------
// Fofem factors for determining Single Bark Thickness.
// Each FOFEM species has a SBT equation index "barkEq" [1-39] into this array.
const fofemSingleBarkThicknessFactor = [
/* 00 */
  0.0, // Not used

  /* 01 */
  0.019, // Not used

  /* 02 */
  0.022,
  /* 03 */
  0.024,
  /* 04 */
  0.025,
  /* 05 */
  0.026,
  /* 06 */
  0.027,
  /* 07 */
  0.028,
  /* 08 */
  0.029,
  /* 09 */
  0.03,
  /* 10 */
  0.031,
  /* 11 */
  0.032,
  /* 12 */
  0.033,
  /* 13 */
  0.034,
  /* 14 */
  0.035,
  /* 15 */
  0.036,
  /* 16 */
  0.037,
  /* 17 */
  0.038,
  /* 18 */
  0.039,
  /* 19 */
  0.04,
  /* 20 */
  0.041,
  /* 21 */
  0.042,
  /* 22 */
  0.043,
  /* 23 */
  0.044,
  /* 24 */
  0.045,
  /* 25 */
  0.046,
  /* 26 */
  0.047,
  /* 27 */
  0.048,
  /* 28 */
  0.049,
  /* 29 */
  0.05,
  /* 30 */
  0.052,
  /* 31 */
  0.055,
  /* 32 */
  0.057, // Not used

  /* 33 */
  0.059,
  /* 34 */
  0.06,
  /* 35 */
  0.062,
  /* 36 */
  0.063, // Changed from 0.065 to 0.063 in Build 606

  /* 37 */
  0.068,
  /* 38 */
  0.072,
  /* 39 */
  0.081,
  /* 40 */
  0.0 // Reserved for Pinus palustrus (longleaf pine)
]
const data = {
  ABAM: {
    fofem5: 'ABIAMA',
    mortEq: 1,
    barkEq: 26,
    regions: 2,
    scientific: 'Abies amabilis',
    common: 'Pacific silver fir'
  },
  ABBA: {
    fofem5: 'ABIBAL',
    mortEq: 1,
    barkEq: 10,
    regions: 134,
    scientific: 'Abies balsamea',
    common: 'Balsam fir'
  },
  ABCO: {
    fofem5: 'ABICON',
    mortEq: 10,
    barkEq: 27,
    regions: 12,
    scientific: 'Abies concolor',
    common: 'White fir'
  },
  ABGR: {
    fofem5: 'ABIGRA',
    mortEq: 11,
    barkEq: 25,
    regions: 12,
    scientific: 'Abies grandis',
    common: 'Grand fir'
  },
  ABLA: {
    fofem5: 'ABILAS',
    mortEq: 11,
    barkEq: 20,
    regions: 12,
    scientific: 'Abies lasiocarpa',
    common: 'Subalpine fir'
  },
  ABMA: {
    fofem5: 'ABIMAG',
    mortEq: 16,
    barkEq: 18,
    regions: 12,
    scientific: 'Abies magnifica',
    common: 'Red fir'
  },
  ABPR: {
    fofem5: 'ABIPRO',
    mortEq: 1,
    barkEq: 24,
    regions: 2,
    scientific: 'Abies procera',
    common: 'Noble fir'
  },
  ABISPP: {
    fofem5: 'ABISPP',
    mortEq: 1,
    barkEq: 30,
    regions: 34,
    scientific: 'Abies species',
    common: 'Firs'
  },
  ACBA3: {
    fofem5: 'ACEBAR',
    mortEq: 1,
    barkEq: 8,
    regions: 4,
    scientific: 'Acer barbatum',
    common: 'Southern sugar maple'
  },
  ACLE: {
    fofem5: 'ACELEU',
    mortEq: 1,
    barkEq: 8,
    regions: 4,
    scientific: 'Acer leucoderme',
    common: 'Chalk maple'
  },
  ACMA3: {
    fofem5: 'ACEMAC',
    mortEq: 1,
    barkEq: 3,
    regions: 2,
    scientific: 'Acer macrophyllum',
    common: 'Bigleaf maple'
  },
  ACNE2: {
    fofem5: 'ACENEG',
    mortEq: 1,
    barkEq: 13,
    regions: 34,
    scientific: 'Acer negundo',
    common: 'Boxelder'
  },
  ACNI5: {
    fofem5: 'ACENIG',
    mortEq: 1,
    barkEq: 14,
    regions: 34,
    scientific: 'Acer nigrum',
    common: 'Black maple'
  },
  ACPE: {
    fofem5: 'ACEPEN',
    mortEq: 1,
    barkEq: 24,
    regions: 34,
    scientific: 'Acer pensylvanicum',
    common: 'Striped maple'
  },
  ACRU: {
    fofem5: 'ACERUB',
    mortEq: 1,
    barkEq: 7,
    regions: 34,
    scientific: 'Acer rubrum',
    common: 'Red maple'
  },
  ACSA2: {
    fofem5: 'ACESACI',
    mortEq: 1,
    barkEq: 10,
    regions: 34,
    scientific: 'Acer saccharinum',
    common: 'Silver maple'
  },
  ACSA3: {
    fofem5: 'ACESACU',
    mortEq: 1,
    barkEq: 12,
    regions: 34,
    scientific: 'Acer saccharum',
    common: 'Sugar maple'
  },
  ACESPP: {
    fofem5: 'ACESPI',
    mortEq: 1,
    barkEq: 19,
    regions: 3,
    scientific: 'Acer spicatum',
    common: 'Mountain maple'
  },
  ACSP2: {
    fofem5: 'ACESPP',
    mortEq: 1,
    barkEq: 8,
    regions: 34,
    scientific: 'Acer species',
    common: 'Maples'
  },
  AEGL: {
    fofem5: 'AESGLA',
    mortEq: 1,
    barkEq: 15,
    regions: 34,
    scientific: 'Aesculus glabra',
    common: 'Ohio buckeye'
  },
  AEOC2: {
    fofem5: 'AESOCT',
    mortEq: 1,
    barkEq: 29,
    regions: 34,
    scientific: 'Aesculus octandra',
    common: 'Yellow buckeye'
  },
  AIAL: {
    fofem5: 'AILALT',
    mortEq: 1,
    barkEq: 29,
    regions: 34,
    scientific: 'Ailanthus altissima',
    common: 'Ailanthus'
  },
  ALRH2: {
    fofem5: 'ALNRHO',
    mortEq: 1,
    barkEq: 35,
    regions: 2,
    scientific: 'Alnus rhombifolia',
    common: 'White alder'
  },
  ALRU2: {
    fofem5: 'ALNRUB',
    mortEq: 1,
    barkEq: 5,
    regions: 2,
    scientific: 'Alnus rubra',
    common: 'Red alder'
  },
  AMAR3: {
    fofem5: 'AMEARB',
    mortEq: 1,
    barkEq: 29,
    regions: 34,
    scientific: 'Amelanchier arborea',
    common: 'Common serviceberry'
  },
  ARME: {
    fofem5: 'ARBMEN',
    mortEq: 1,
    barkEq: 34,
    regions: 2,
    scientific: 'Arbutus menziesii',
    common: 'Pacific madrone'
  },
  BEAL2: {
    fofem5: 'BETALL',
    mortEq: 1,
    barkEq: 10,
    regions: 34,
    scientific: 'Betula alleghaniensis',
    common: 'Yellow birch'
  },
  BELE: {
    fofem5: 'BETLEN',
    mortEq: 1,
    barkEq: 9,
    regions: 4,
    scientific: 'Betula lenta',
    common: 'Sweet birch'
  },
  BENI: {
    fofem5: 'BETNIG',
    mortEq: 1,
    barkEq: 8,
    regions: 34,
    scientific: 'Betula nigra',
    common: 'River birch'
  },
  BEOC2: {
    fofem5: 'BETOCC',
    mortEq: 1,
    barkEq: 29,
    regions: 34,
    scientific: 'Betula occidentalis',
    common: 'Water birch'
  },
  BEPA: {
    fofem5: 'BETPAP',
    mortEq: 1,
    barkEq: 6,
    regions: 234,
    scientific: 'Betula papyrifera',
    common: 'Paper birch'
  },
  BETSPP: {
    fofem5: 'BETSPP',
    mortEq: 1,
    barkEq: 12,
    regions: 234,
    scientific: 'Betula species ',
    common: 'Birches'
  },
  CEOC: {
    fofem5: 'CELOCC',
    mortEq: 1,
    barkEq: 14,
    regions: 34,
    scientific: 'Celtis occidentalis',
    common: 'Common hackberry'
  },
  CAAQ2: {
    fofem5: 'CARAQU',
    mortEq: 1,
    barkEq: 19,
    regions: 34,
    scientific: 'Carya aquatica',
    common: 'Water hickory'
  },
  CACA18: {
    fofem5: 'CARCAR',
    mortEq: 1,
    barkEq: 9,
    regions: 34,
    scientific: 'Carpinus caroliniana',
    common: 'American hornbeam'
  },
  CACOL3: {
    fofem5: 'CARCOR',
    mortEq: 1,
    barkEq: 16,
    regions: 34,
    scientific: 'Carya cordiformis',
    common: 'Bitternut hickory'
  },
  CAGL8: {
    fofem5: 'CARGLA',
    mortEq: 1,
    barkEq: 16,
    regions: 34,
    scientific: 'Carya glabra',
    common: 'Pignut hickory'
  },
  CAIL2: {
    fofem5: 'CARILL',
    mortEq: 1,
    barkEq: 15,
    regions: 34,
    scientific: 'Carya illinoensis',
    common: 'Pecan'
  },
  CALA21: {
    fofem5: 'CARLAC',
    mortEq: 1,
    barkEq: 22,
    regions: 34,
    scientific: 'Carya laciniosa',
    common: 'Shellbark hickory'
  },
  CAOV2: {
    fofem5: 'CAROVA',
    mortEq: 1,
    barkEq: 19,
    regions: 34,
    scientific: 'Carya ovata',
    common: 'Shagbark hickory'
  },
  CARSPP: {
    fofem5: 'CARSPP',
    mortEq: 1,
    barkEq: 23,
    regions: 34,
    scientific: 'Carya species',
    common: 'Hickories'
  },
  CATE9: {
    fofem5: 'CARTEX',
    mortEq: 1,
    barkEq: 19,
    regions: 4,
    scientific: 'Carya texana',
    common: 'Black hickory'
  },
  CATO6: {
    fofem5: 'CARTOM',
    mortEq: 1,
    barkEq: 22,
    regions: 34,
    scientific: 'Carya tomentosa',
    common: 'Mockernut hickory'
  },
  CACHM: {
    fofem5: 'CASCHR',
    mortEq: 1,
    barkEq: 24,
    regions: 2,
    scientific: 'Castanopsis chrysophylla',
    common: 'Giant chinkapin'
  },
  CADE12: {
    fofem5: 'CASDEN',
    mortEq: 1,
    barkEq: 19,
    regions: 3,
    scientific: 'Castanea dentata',
    common: 'American chestnut'
  },
  CATSPP: {
    fofem5: 'CATSPP',
    mortEq: 1,
    barkEq: 16,
    regions: 4,
    scientific: 'Catalpa species',
    common: 'Catalpas'
  },
  CELA: {
    fofem5: 'CELLAE',
    mortEq: 1,
    barkEq: 15,
    regions: 34,
    scientific: 'Celtis laevigata',
    common: 'Sugarberry'
  },
  CECA4: {
    fofem5: 'CERCAN',
    mortEq: 1,
    barkEq: 14,
    regions: 34,
    scientific: 'Cercis canadensis',
    common: 'Eastern redbud'
  },
  CHLA: {
    fofem5: 'CHALAW',
    mortEq: 1,
    barkEq: 39,
    regions: 2,
    scientific: 'Chamaecyparis lawsoniana',
    common: 'Port Orford cedar'
  },
  CHNO: {
    fofem5: 'CHANOO',
    mortEq: 1,
    barkEq: 2,
    regions: 2,
    scientific: 'Chamaecyparis nootkatenis',
    common: 'Alaska cedar'
  },
  CHTH2: {
    fofem5: 'CHATHY',
    mortEq: 1,
    barkEq: 4,
    regions: 34,
    scientific: 'Chamaecyparis thyoides',
    common: 'Atlantic white cedar'
  },
  COFL2: {
    fofem5: 'CORFLO',
    mortEq: 1,
    barkEq: 20,
    regions: 34,
    scientific: 'Cornus florida',
    common: 'Flowering dogwood'
  },
  CONU4: {
    fofem5: 'CORNUT',
    mortEq: 1,
    barkEq: 35,
    regions: 2,
    scientific: 'Cornus nuttallii',
    common: 'Pacific dogwood'
  },
  CORSPP: {
    fofem5: 'CORSPP',
    mortEq: 1,
    barkEq: 10,
    regions: 34,
    scientific: 'Cornus species',
    common: 'Dogwoods'
  },
  CRDO2: {
    fofem5: 'CRADOU',
    mortEq: 1,
    barkEq: 17,
    regions: 4,
    scientific: 'Crataegus douglasii',
    common: 'Black hawthorn'
  },
  CRASPP: {
    fofem5: 'CRASPPW',
    mortEq: 1,
    barkEq: 35,
    regions: 2,
    scientific: 'Crataegus species (western)',
    common: 'Hawthorns (western)'
  },
  DIVI5: {
    fofem5: 'DIOVIR',
    mortEq: 1,
    barkEq: 20,
    regions: 34,
    scientific: 'Diospyros virginiana',
    common: 'Persimmon'
  },
  FAGR: {
    fofem5: 'FAGGRA',
    mortEq: 1,
    barkEq: 4,
    regions: 34,
    scientific: 'Fagus grandifolia',
    common: 'American beech'
  },
  FRAM2: {
    fofem5: 'FRAAMA',
    mortEq: 1,
    barkEq: 21,
    regions: 34,
    scientific: 'Fraxinus americana',
    common: 'White ash'
  },
  FRNI: {
    fofem5: 'FRANIG',
    mortEq: 1,
    barkEq: 14,
    regions: 34,
    scientific: 'Fraxinus nigra',
    common: 'Black ash'
  },
  FRPE: {
    fofem5: 'FRAPEN',
    mortEq: 1,
    barkEq: 18,
    regions: 34,
    scientific: 'Fraxinus pennsylvanica',
    common: 'Green ash'
  },
  FRPR: {
    fofem5: 'FRAPRO',
    mortEq: 1,
    barkEq: 16,
    regions: 34,
    scientific: 'Fraxinus profunda',
    common: 'Pumpkin ash'
  },
  FRQU: {
    fofem5: 'FRAQUA',
    mortEq: 1,
    barkEq: 9,
    regions: 34,
    scientific: 'Fraxinus quadrangulata',
    common: 'Blue ash'
  },
  FRASPP: {
    fofem5: 'FRASPP',
    mortEq: 1,
    barkEq: 21,
    regions: 34,
    scientific: 'Fraxinus species',
    common: 'Ashes'
  },
  GLTR: {
    fofem5: 'GLETRI',
    mortEq: 1,
    barkEq: 17,
    regions: 34,
    scientific: 'Gleditsia triacanthos',
    common: 'Honeylocust'
  },
  GOLA: {
    fofem5: 'GORLAS',
    mortEq: 1,
    barkEq: 17,
    regions: 4,
    scientific: 'Gordonia lasianthus',
    common: 'Loblolly bay'
  },
  GYDI: {
    fofem5: 'GYMDIO',
    mortEq: 1,
    barkEq: 10,
    regions: 34,
    scientific: 'Gymnocladus dioicus',
    common: 'Kentucky coffeetree'
  },
  HALSPP: {
    fofem5: 'HALSPP',
    mortEq: 1,
    barkEq: 17,
    regions: 4,
    scientific: 'Halesia species',
    common: 'Silverbells'
  },
  ILOP: {
    fofem5: 'ILEOPA',
    mortEq: 1,
    barkEq: 21,
    regions: 34,
    scientific: 'Ilex opaca',
    common: 'American holly'
  },
  JUCI: {
    fofem5: 'JUGCIN',
    mortEq: 1,
    barkEq: 20,
    regions: 34,
    scientific: 'Juglans cinerea',
    common: 'Butternut'
  },
  JUNI: {
    fofem5: 'JUGNIG',
    mortEq: 1,
    barkEq: 20,
    regions: 34,
    scientific: 'Juglans nigra',
    common: 'Black walnut'
  },
  JUOC: {
    fofem5: 'JUNOCC',
    mortEq: 1,
    barkEq: 4,
    regions: 2,
    scientific: 'Juniperus occidentalis',
    common: 'Western juniper'
  },
  JUNSPP: {
    fofem5: 'JUNSPP',
    mortEq: 1,
    barkEq: 12,
    regions: 34,
    scientific: 'Juniperus species',
    common: 'Junipers/Redcedars'
  },
  JUVI: {
    fofem5: 'JUNVIR',
    mortEq: 1,
    barkEq: 17,
    regions: 34,
    scientific: 'Juniperus virginiana',
    common: 'Eastern red cedar'
  },
  LALA: {
    fofem5: 'LARLAR',
    mortEq: 1,
    barkEq: 10,
    regions: 34,
    scientific: 'Larix laricina',
    common: 'Tamarack'
  },
  LALY: {
    fofem5: 'LARLYA',
    mortEq: 1,
    barkEq: 29,
    regions: 2,
    scientific: 'Larix lyallii',
    common: 'Subalpine larch'
  },
  LAOC: {
    fofem5: 'LAROCC',
    mortEq: 14,
    barkEq: 36,
    regions: 12,
    scientific: 'Larix occidentalis',
    common: 'Western larch'
  },
  LIDE: {
    fofem5: 'LIBDEC',
    mortEq: 12,
    barkEq: 34,
    regions: 2,
    scientific: 'Libocedrus decurrens',
    common: 'Incense cedar'
  },
  LIST2: {
    fofem5: 'LIQSTY',
    mortEq: 1,
    barkEq: 15,
    regions: 34,
    scientific: 'Liquidambar styraciflua',
    common: 'Sweetgum'
  },
  LITU: {
    fofem5: 'LIRTUL',
    mortEq: 1,
    barkEq: 20,
    regions: 34,
    scientific: 'Liriodendron tulipifera',
    common: 'Yellow poplar'
  },
  LIDE3: {
    fofem5: 'LITDEN',
    mortEq: 1,
    barkEq: 30,
    regions: 2,
    scientific: 'Lithocarpus densiflorus',
    common: 'Tanoak'
  },
  MAPO: {
    fofem5: 'MACPOM',
    mortEq: 1,
    barkEq: 16,
    regions: 4,
    scientific: 'Maclura pomifera',
    common: 'Osage orange'
  },
  MAAC: {
    fofem5: 'MAGACU',
    mortEq: 1,
    barkEq: 15,
    regions: 34,
    scientific: 'Magnolia acuminata',
    common: 'Cucumber tree'
  },
  MAGR4: {
    fofem5: 'MAGGRA',
    mortEq: 1,
    barkEq: 12,
    regions: 4,
    scientific: 'Magnolia grandiflora',
    common: 'Southern magnolia'
  },
  MAMA2: {
    fofem5: 'MAGMAC',
    mortEq: 1,
    barkEq: 12,
    regions: 4,
    scientific: 'Magnolia macrophylla',
    common: 'Bigleaf magnolia'
  },
  MAGSPP: {
    fofem5: 'MAGSPP',
    mortEq: 1,
    barkEq: 18,
    regions: 34,
    scientific: 'Magnolia species',
    common: 'Magnolias'
  },
  MAVI2: {
    fofem5: 'MAGVIR',
    mortEq: 1,
    barkEq: 19,
    regions: 34,
    scientific: 'Magnolia virginiana',
    common: 'Sweetbay'
  },
  MALPRU: {
    fofem5: 'MALPRU',
    mortEq: 1,
    barkEq: 17,
    regions: 4,
    scientific: 'Prunus species',
    common: 'Apples/Cherries'
  },
  MALSPP: {
    fofem5: 'MALSPP',
    mortEq: 1,
    barkEq: 22,
    regions: 34,
    scientific: 'Malus species',
    common: 'Apples'
  },
  MOAL: {
    fofem5: 'MORALB',
    mortEq: 1,
    barkEq: 17,
    regions: 4,
    scientific: 'Morus alba',
    common: 'White mulberry'
  },
  MORU2: {
    fofem5: 'MORRUB',
    mortEq: 1,
    barkEq: 17,
    regions: 4,
    scientific: 'Morus rubra',
    common: 'Red mulberry'
  },
  MORSPP: {
    fofem5: 'MORSPP',
    mortEq: 1,
    barkEq: 12,
    regions: 34,
    scientific: 'Morus species',
    common: 'Mulberries'
  },
  NYAQ2: {
    fofem5: 'NYSAQU',
    mortEq: 1,
    barkEq: 9,
    regions: 4,
    scientific: 'Nyssa aquatica',
    common: 'Water tupelo'
  },
  NYOG: {
    fofem5: 'NYSOGE',
    mortEq: 1,
    barkEq: 17,
    regions: 4,
    scientific: 'Nyssa ogache',
    common: 'Ogeechee tupelo'
  },
  NYSSPP: {
    fofem5: 'NYSSPP',
    mortEq: 1,
    barkEq: 4,
    regions: 34,
    scientific: 'Nyssa species',
    common: 'Tupelos'
  },
  NYSY: {
    fofem5: 'NYSSYL',
    mortEq: 1,
    barkEq: 18,
    regions: 34,
    scientific: 'Nyssa sylvatica',
    common: 'Black gum, Black tupelo'
  },
  NYBI: {
    fofem5: 'NYSSYLB',
    mortEq: 1,
    barkEq: 16,
    regions: 4,
    scientific: 'Nyssa biflora',
    common: 'Swamp tupelo'
  },
  OSVI: {
    fofem5: 'OSTVIR',
    mortEq: 1,
    barkEq: 16,
    regions: 34,
    scientific: 'Ostrya virginiana',
    common: 'Hophornbeam'
  },
  OXAR: {
    fofem5: 'OXYARB',
    mortEq: 1,
    barkEq: 15,
    regions: 34,
    scientific: 'Oxydendrum arboreum',
    common: 'Sourwood'
  },
  PATO2: {
    fofem5: 'PAUTOM',
    mortEq: 1,
    barkEq: 29,
    regions: 34,
    scientific: 'Paulownia tomentosa',
    common: 'Princess tree'
  },
  PEBO: {
    fofem5: 'PERBOR',
    mortEq: 1,
    barkEq: 17,
    regions: 4,
    scientific: 'Persea borbonia',
    common: 'Redbay'
  },
  PIAB: {
    fofem5: 'PICABI',
    mortEq: 3,
    barkEq: 8,
    regions: 34,
    scientific: 'Picea abies',
    common: 'Norway spruce'
  },
  PIEN: {
    fofem5: 'PICENG',
    mortEq: 15,
    barkEq: 15,
    regions: 12,
    scientific: 'Picea engelmannii',
    common: 'Engelmann spruce'
  },
  PIGL: {
    fofem5: 'PICGLA',
    mortEq: 3,
    barkEq: 4,
    regions: 123,
    scientific: 'Picea glauca',
    common: 'White spruce'
  },
  PIMA: {
    fofem5: 'PICMAR',
    mortEq: 3,
    barkEq: 11,
    regions: 234,
    scientific: 'Picea mariana',
    common: 'Black spruce'
  },
  PIPU: {
    fofem5: 'PICPUN',
    mortEq: 3,
    barkEq: 10,
    regions: 1,
    scientific: 'Picea pungens',
    common: 'Blue spruce'
  },
  PIRU: {
    fofem5: 'PICRUB',
    mortEq: 3,
    barkEq: 13,
    regions: 34,
    scientific: 'Picea rubens',
    common: 'Red spruce'
  },
  PISI: {
    fofem5: 'PICSIT',
    mortEq: 3,
    barkEq: 6,
    regions: 2,
    scientific: 'Picea sitchensis',
    common: 'Sitka spruce'
  },
  PICSPP: {
    fofem5: 'PICSPP',
    mortEq: 3,
    barkEq: 13,
    regions: 34,
    scientific: 'Picea species',
    common: 'Spruces'
  },
  PIAL: {
    fofem5: 'PINALB',
    mortEq: 17,
    barkEq: 9,
    regions: 12,
    scientific: 'Pinus albicaulis',
    common: 'Whitebark pine'
  },
  PIAT: {
    fofem5: 'PINATT',
    mortEq: 1,
    barkEq: 9,
    regions: 2,
    scientific: 'Pinus attenuata',
    common: 'Knobcone pine'
  },
  PIBA2: {
    fofem5: 'PINBAN',
    mortEq: 1,
    barkEq: 19,
    regions: 3,
    scientific: 'Pinus banksiana',
    common: 'Jack pine'
  },
  PICL: {
    fofem5: 'PINCLA',
    mortEq: 1,
    barkEq: 14,
    regions: 4,
    scientific: 'Pinus clausa',
    common: 'Sand pine'
  },
  PICO: {
    fofem5: 'PINCON',
    mortEq: 17,
    barkEq: 7,
    regions: 12,
    scientific: 'Pinus contorta',
    common: 'Lodgepole pine'
  },
  PIEC2: {
    fofem5: 'PINECH',
    mortEq: 1,
    barkEq: 16,
    regions: 34,
    scientific: 'Pinus echinata',
    common: 'Shortleaf pine'
  },
  PIEL: {
    fofem5: 'PINELL',
    mortEq: 1,
    barkEq: 31,
    regions: 4,
    scientific: 'Pinus elliottii',
    common: 'Slash pine'
  },
  PIFL2: {
    fofem5: 'PINFLE',
    mortEq: 1,
    barkEq: 9,
    regions: 1,
    scientific: 'Pinus flexilis',
    common: 'Limber pine'
  },
  PIGL2: {
    fofem5: 'PINGLA',
    mortEq: 1,
    barkEq: 14,
    regions: 4,
    scientific: 'Pinus glabra',
    common: 'Spruce pine'
  },
  PIJE: {
    fofem5: 'PINJEF',
    mortEq: 19,
    barkEq: 37,
    regions: 12,
    scientific: 'Pinus jeffreyi',
    common: 'Jeffrey pine'
  },
  PILA: {
    fofem5: 'PINLAM',
    mortEq: 18,
    barkEq: 38,
    regions: 12,
    scientific: 'Pinus lambertiana',
    common: 'Sugar pine'
  },
  PIMO3: {
    fofem5: 'PINMON',
    mortEq: 1,
    barkEq: 14,
    regions: 12,
    scientific: 'Pinus monticola',
    common: 'Western white pine'
  },
  PIPA2: {
    fofem5: 'PINPAL',
    mortEq: 5,
    barkEq: 40,
    regions: 4,
    scientific: 'Pinus palustrus',
    common: 'Longleaf pine'
  },
  PIPO: {
    fofem5: 'PINPON',
    mortEq: 19,
    barkEq: 36,
    regions: 12,
    scientific: 'Pinus ponderosa',
    common: 'Ponderosa pine'
  },
  PIPU5: {
    fofem5: 'PINPUN',
    mortEq: 1,
    barkEq: 19,
    regions: 34,
    scientific: 'Pinus pungens',
    common: 'Table mountain pine'
  },
  PIRE: {
    fofem5: 'PINRES',
    mortEq: 1,
    barkEq: 22,
    regions: 34,
    scientific: 'Pinus resinosa',
    common: 'Red pine'
  },
  PIRI: {
    fofem5: 'PINRIG',
    mortEq: 1,
    barkEq: 24,
    regions: 34,
    scientific: 'Pinus rigida',
    common: 'Pitch pine'
  },
  PISA2: {
    fofem5: 'PINSAB',
    mortEq: 1,
    barkEq: 12,
    regions: 2,
    scientific: 'Pinus sabiniana',
    common: 'Gray (Digger) pine'
  },
  PISE: {
    fofem5: 'PINSER',
    mortEq: 1,
    barkEq: 35,
    regions: 34,
    scientific: 'Pinus serotina',
    common: 'Pond pine'
  },
  PINSPP: {
    fofem5: 'PINSPP',
    mortEq: 1,
    barkEq: 9,
    regions: 34,
    scientific: 'Pinus species',
    common: 'Pines'
  },
  PIST: {
    fofem5: 'PINSTR',
    mortEq: 1,
    barkEq: 24,
    regions: 34,
    scientific: 'Pinus strobus',
    common: 'Eastern white pine'
  },
  PISY: {
    fofem5: 'PINSYL',
    mortEq: 1,
    barkEq: 9,
    regions: 34,
    scientific: 'Pinus sylvestris',
    common: 'Scots pine'
  },
  PITA: {
    fofem5: 'PINTAE',
    mortEq: 1,
    barkEq: 30,
    regions: 34,
    scientific: 'Pinus taeda',
    common: 'Loblolly pine'
  },
  PIVI2: {
    fofem5: 'PINVIR',
    mortEq: 1,
    barkEq: 12,
    regions: 34,
    scientific: 'Pinus virginiana',
    common: 'Virginia pine'
  },
  PLOC: {
    fofem5: 'PLAOCC',
    mortEq: 1,
    barkEq: 12,
    regions: 34,
    scientific: 'Plantus occidentalis',
    common: 'American sycamore'
  },
  POBA2: {
    fofem5: 'POPBAL',
    mortEq: 1,
    barkEq: 19,
    regions: 34,
    scientific: 'Populus balsamifera',
    common: 'Balsam poplar'
  },
  PODE3: {
    fofem5: 'POPDEL',
    mortEq: 1,
    barkEq: 19,
    regions: 34,
    scientific: 'Populus deltoides',
    common: 'Eastern cottonwood'
  },
  POGR4: {
    fofem5: 'POPGRA',
    mortEq: 1,
    barkEq: 18,
    regions: 34,
    scientific: 'Populus grandidentata',
    common: 'Bigtooth aspen'
  },
  POHE4: {
    fofem5: 'POPHET',
    mortEq: 1,
    barkEq: 29,
    regions: 34,
    scientific: 'Populus heterophylla',
    common: 'Swamp cottonwood'
  },
  POPSPP: {
    fofem5: 'POPSPP',
    mortEq: 1,
    barkEq: 17,
    regions: 34,
    scientific: 'Populus species',
    common: 'Poplars'
  },
  POTR15: {
    fofem5: 'POPTRI',
    mortEq: 1,
    barkEq: 23,
    regions: 2,
    scientific: 'Populus trichocarpa',
    common: 'Black cottonwood'
  },
  PRAM: {
    fofem5: 'PRUAME',
    mortEq: 1,
    barkEq: 19,
    regions: 3,
    scientific: 'Prunus americana',
    common: 'American plum'
  },
  PREM: {
    fofem5: 'PRUEMA',
    mortEq: 1,
    barkEq: 35,
    regions: 2,
    scientific: 'Prunus emarginata',
    common: 'Bitter cherry'
  },
  PRPE2: {
    fofem5: 'PRUDEN',
    mortEq: 1,
    barkEq: 24,
    regions: 34,
    scientific: 'Prunus pensylvanica',
    common: 'Pin cherry'
  },
  PRSE2: {
    fofem5: 'PRUSER',
    mortEq: 1,
    barkEq: 9,
    regions: 34,
    scientific: 'Prunus serotina',
    common: 'Black cherry'
  },
  PRVI: {
    fofem5: 'PRUVIR',
    mortEq: 1,
    barkEq: 19,
    regions: 3,
    scientific: 'Prunus virginiana',
    common: 'Chokecherry'
  },
  PSME: {
    fofem5: 'PSEMEN',
    mortEq: 20,
    barkEq: 36,
    regions: 12,
    scientific: 'Pseudotsuga menziesii',
    common: 'Douglas-fir'
  },
  QUAG: {
    fofem5: 'QUEAGR',
    mortEq: 1,
    barkEq: 29,
    regions: 2,
    scientific: 'Quercus agrifolia',
    common: 'California live oak'
  },
  QUAL: {
    fofem5: 'QUEALB',
    mortEq: 1,
    barkEq: 19,
    regions: 34,
    scientific: 'Quercus alba',
    common: 'White oak'
  },
  QUBI: {
    fofem5: 'QUEBIC',
    mortEq: 1,
    barkEq: 24,
    regions: 34,
    scientific: 'Quercus bicolor',
    common: 'Swamp white oak'
  },
  QUCH2: {
    fofem5: 'QUECHR',
    mortEq: 1,
    barkEq: 3,
    regions: 2,
    scientific: 'Quercus chrysolepis',
    common: 'Canyon live oak'
  },
  QUOC2: {
    fofem5: 'QUEOCC',
    mortEq: 1,
    barkEq: 19,
    regions: 34,
    scientific: 'Quercus coccinea',
    common: 'Scarlet oak'
  },
  QUDU: {
    fofem5: 'QUEDOU',
    mortEq: 1,
    barkEq: 12,
    regions: 2,
    scientific: 'Quercus douglasii',
    common: 'Blue oak'
  },
  QUEL: {
    fofem5: 'QUEELL',
    mortEq: 1,
    barkEq: 17,
    regions: 34,
    scientific: 'Quercus ellipsoidalis',
    common: 'Northern pin oak'
  },
  QUEN: {
    fofem5: 'QUEENG',
    mortEq: 1,
    barkEq: 33,
    regions: 2,
    scientific: 'Quercus engelmannii',
    common: 'Engelmann oak'
  },
  QUFA: {
    fofem5: 'QUEFAL',
    mortEq: 1,
    barkEq: 23,
    regions: 34,
    scientific: 'Quercus falcata',
    common: 'Southern red oak'
  },
  QUGA4: {
    fofem5: 'QUEGAR',
    mortEq: 1,
    barkEq: 8,
    regions: 2,
    scientific: 'Quercus garryana',
    common: 'Oregon white oak'
  },
  QUIM: {
    fofem5: 'QUEIMB',
    mortEq: 1,
    barkEq: 20,
    regions: 34,
    scientific: 'Quercus imbricaria',
    common: 'Shingle oak'
  },
  QUIN: {
    fofem5: 'QUEINC',
    mortEq: 1,
    barkEq: 17,
    regions: 4,
    scientific: 'Quercus incana',
    common: 'Bluejack oak'
  },
  QUKE: {
    fofem5: 'QUEKEL',
    mortEq: 1,
    barkEq: 9,
    regions: 2,
    scientific: 'Quercus kellogii',
    common: 'Califonia black oak'
  },
  QULA2: {
    fofem5: 'QUELAE',
    mortEq: 1,
    barkEq: 16,
    regions: 4,
    scientific: 'Quercus laevis',
    common: 'Turkey oak'
  },
  QULA3: {
    fofem5: 'QUELAU',
    mortEq: 1,
    barkEq: 15,
    regions: 4,
    scientific: 'Quercus laurifolia',
    common: 'Laurel oak'
  },
  QULO: {
    fofem5: 'QUELOB',
    mortEq: 1,
    barkEq: 22,
    regions: 2,
    scientific: 'Quercus lobata',
    common: 'Valley oak'
  },
  QULY: {
    fofem5: 'QUELYR',
    mortEq: 1,
    barkEq: 18,
    regions: 34,
    scientific: 'Quercus lyrata',
    common: 'Overcup oak'
  },
  QUMA2: {
    fofem5: 'QUEMAC',
    mortEq: 1,
    barkEq: 21,
    regions: 34,
    scientific: 'Quercus macrocarpa',
    common: 'Bur oak'
  },
  QUMA3: {
    fofem5: 'QUEMAR',
    mortEq: 1,
    barkEq: 16,
    regions: 34,
    scientific: 'Quercus marilandica',
    common: 'Blackjack oak'
  },
  QUMI: {
    fofem5: 'QUEMIC',
    mortEq: 1,
    barkEq: 25,
    regions: 34,
    scientific: 'Quercus michauxii',
    common: 'Swamp chestnut oak'
  },
  QUMU: {
    fofem5: 'QUEMUE',
    mortEq: 1,
    barkEq: 21,
    regions: 34,
    scientific: 'Quercus muehlenbergii',
    common: 'Chinkapin oak'
  },
  QUNI: {
    fofem5: 'QUENIG',
    mortEq: 1,
    barkEq: 15,
    regions: 34,
    scientific: 'Quercus nigra',
    common: 'Water oak'
  },
  QUNU: {
    fofem5: 'QUENUT',
    mortEq: 1,
    barkEq: 9,
    regions: 4,
    scientific: 'Quercus nuttallii',
    common: 'Nuttall oak'
  },
  QUPA2: {
    fofem5: 'QUEPAL',
    mortEq: 1,
    barkEq: 20,
    regions: 34,
    scientific: 'Quercus palustris',
    common: 'Pin oak'
  },
  QUPH: {
    fofem5: 'QUEPHE',
    mortEq: 1,
    barkEq: 20,
    regions: 34,
    scientific: 'Quercus phellos',
    common: 'Willow oak'
  },
  QUPR2: {
    fofem5: 'QUEPRI',
    mortEq: 1,
    barkEq: 28,
    regions: 34,
    scientific: 'Quercus prinus',
    common: 'Chestnut oak'
  },
  QURU: {
    fofem5: 'QUERUB',
    mortEq: 1,
    barkEq: 21,
    regions: 34,
    scientific: 'Quercus rubra',
    common: 'Northern red oak'
  },
  QUSH: {
    fofem5: 'QUESHU',
    mortEq: 1,
    barkEq: 16,
    regions: 34,
    scientific: 'Quercus shumardii',
    common: 'Shumard oak'
  },
  QUESPP: {
    fofem5: 'QUESPP',
    mortEq: 1,
    barkEq: 24,
    regions: 34,
    scientific: 'Quercus species',
    common: 'Oaks'
  },
  QUST: {
    fofem5: 'QUESTE',
    mortEq: 1,
    barkEq: 23,
    regions: 34,
    scientific: 'Quercus stellata',
    common: 'Post oak'
  },
  QUVE: {
    fofem5: 'QUEVEL',
    mortEq: 1,
    barkEq: 24,
    regions: 34,
    scientific: 'Quercus velutina',
    common: 'Black oak'
  },
  QUVI: {
    fofem5: 'QUEVIR',
    mortEq: 1,
    barkEq: 22,
    regions: 4,
    scientific: 'Quercus virginiana',
    common: 'Live oak'
  },
  QUWI2: {
    fofem5: 'QUEWIS',
    mortEq: 1,
    barkEq: 13,
    regions: 2,
    scientific: 'Quercus wislizenii',
    common: 'Interior live oak'
  },
  ROPS: {
    fofem5: 'ROBPSE',
    mortEq: 1,
    barkEq: 28,
    regions: 34,
    scientific: 'Robinia pseudoacacia',
    common: 'Black locust'
  },
  SABE2: {
    fofem5: 'SALDIA',
    mortEq: 1,
    barkEq: 19,
    regions: 3,
    scientific: 'Salix bebbiana',
    common: 'Diamond willow'
  },
  SANI: {
    fofem5: 'SALNIG',
    mortEq: 1,
    barkEq: 19,
    regions: 34,
    scientific: 'Salix nigra',
    common: 'Black willow'
  },
  SALSPP: {
    fofem5: 'SALSPP',
    mortEq: 1,
    barkEq: 20,
    regions: 234,
    scientific: 'Salix species',
    common: 'Willows'
  },
  SAAL5: {
    fofem5: 'SASALB',
    mortEq: 1,
    barkEq: 14,
    regions: 34,
    scientific: 'Sassafras albidum',
    common: 'Sassafras'
  },
  SEGI2: {
    fofem5: 'SEQGIG',
    mortEq: 1,
    barkEq: 39,
    regions: 2,
    scientific: 'Sequoiadendron gigantea',
    common: 'Giant sequoia'
  },
  SESE3: {
    fofem5: 'SEQSEM',
    mortEq: 1,
    barkEq: 39,
    regions: 2,
    scientific: 'Sequoia sempervirens',
    common: 'Redwood'
  },
  SOAM3: {
    fofem5: 'SORAME',
    mortEq: 1,
    barkEq: 19,
    regions: 3,
    scientific: 'Sorbus americana',
    common: 'American mountain ash'
  },
  TABR2: {
    fofem5: 'TAXBRE',
    mortEq: 1,
    barkEq: 4,
    regions: 12,
    scientific: 'Taxus brevifolia',
    common: 'Pacific yew'
  },
  TADI2: {
    fofem5: 'TAXDIS',
    mortEq: 1,
    barkEq: 4,
    regions: 34,
    scientific: 'Taxodium distichum',
    common: 'Bald cypress'
  },
  TAAS: {
    fofem5: 'TAXDISN',
    mortEq: 1,
    barkEq: 21,
    regions: 4,
    scientific: 'Taxodium distictum var. nutans',
    common: 'Pond cypress'
  },
  THOC2: {
    fofem5: 'THUOCC',
    mortEq: 1,
    barkEq: 4,
    regions: 34,
    scientific: 'Thuja occidentalis',
    common: 'Northern white cedar'
  },
  THPL: {
    fofem5: 'THUPLI',
    mortEq: 1,
    barkEq: 14,
    regions: 12,
    scientific: 'Thuja plicata',
    common: 'Western red cedar'
  },
  THUSPP: {
    fofem5: 'THUSPP',
    mortEq: 1,
    barkEq: 12,
    regions: 34,
    scientific: 'Thuju species',
    common: 'Arborvitae'
  },
  TIAM: {
    fofem5: 'TILAME',
    mortEq: 1,
    barkEq: 17,
    regions: 34,
    scientific: 'Tilia americana',
    common: 'American basswood'
  },
  TIHE: {
    fofem5: 'TILHET',
    mortEq: 1,
    barkEq: 29,
    regions: 34,
    scientific: 'Tilia heterophylla',
    common: 'White basswood'
  },
  TSCA: {
    fofem5: 'TSUCAN',
    mortEq: 1,
    barkEq: 18,
    regions: 34,
    scientific: 'Tsuga canadensis',
    common: 'Eastern hemlock'
  },
  TSHE: {
    fofem5: 'TSUHET',
    mortEq: 1,
    barkEq: 19,
    regions: 12,
    scientific: 'Tsuga heterophylla',
    common: 'Western hemlock'
  },
  TSME: {
    fofem5: 'TSUMER',
    mortEq: 1,
    barkEq: 19,
    regions: 12,
    scientific: 'Tsuga mertensiana',
    common: 'Mountain hemlock'
  },
  ULAL: {
    fofem5: 'ULMALA',
    mortEq: 1,
    barkEq: 10,
    regions: 34,
    scientific: 'Ulmus alata',
    common: 'Winged elm'
  },
  ULAM: {
    fofem5: 'ULMAME',
    mortEq: 1,
    barkEq: 10,
    regions: 34,
    scientific: 'Ulmus americana',
    common: 'American elm'
  },
  ULPU: {
    fofem5: 'ULMPUM',
    mortEq: 1,
    barkEq: 17,
    regions: 34,
    scientific: 'Ulmus pumila',
    common: 'Siberian elm'
  },
  ULRU: {
    fofem5: 'ULMRUB',
    mortEq: 1,
    barkEq: 11,
    regions: 34,
    scientific: 'Ulmus rubra',
    common: 'Slippery elm'
  },
  ULMSPP: {
    fofem5: 'ULMSPP',
    mortEq: 1,
    barkEq: 18,
    regions: 34,
    scientific: 'Ulmus species',
    common: 'Elms'
  },
  ULTH: {
    fofem5: 'ULMTHO',
    mortEq: 1,
    barkEq: 12,
    regions: 34,
    scientific: 'Ulmus thomasii',
    common: 'Rock elm'
  },
  UMCA: {
    fofem5: 'UMBCAL',
    mortEq: 1,
    barkEq: 5,
    regions: 2,
    scientific: 'Umbellularia californica',
    common: 'California laurel'
  },
  ABLO: {
    fofem5: 'ABLO',
    mortEq: 10,
    barkEq: 27,
    regions: 12,
    scientific: 'Abies lowiana',
    common: 'Sierra white fir'
  },
  ABNO: {
    fofem5: 'ABNO',
    mortEq: 1,
    barkEq: 24,
    regions: 12,
    scientific: 'Abies nobilis',
    common: 'Noble fir'
  },
  AEFL: {
    fofem5: 'AEFL',
    mortEq: 1,
    barkEq: 29,
    regions: 34,
    scientific: 'Aesculus flava',
    common: 'Yellow buckeye'
  },
  CANO9: {
    fofem5: 'CANO9',
    mortEq: 1,
    barkEq: 2,
    regions: 2,
    scientific: 'Callitropsis nootkatensis',
    common: 'Alaska cedar'
  },
  CADE27: {
    fofem5: 'CADE27',
    mortEq: 12,
    barkEq: 34,
    regions: 12,
    scientific: 'Calocedrus decurrens',
    common: 'Incense cedar'
  },
  CAAL27: {
    fofem5: 'CAAL27',
    mortEq: 1,
    barkEq: 22,
    regions: 34,
    scientific: 'Carya alba',
    common: 'Mockernut hickory'
  },
  CACA38: {
    fofem5: 'CACA38',
    mortEq: 1,
    barkEq: 19,
    regions: 34,
    scientific: 'Carya carolinae septentrionalis',
    common: 'Shagbark hickory'
  },
  CAAM29: {
    fofem5: 'CAAM29',
    mortEq: 1,
    barkEq: 19,
    regions: 34,
    scientific: 'Castenea Americana',
    common: 'American chestnut'
  },
  CHCHC4: {
    fofem5: 'CHCHC4',
    mortEq: 1,
    barkEq: 24,
    regions: 34,
    scientific: 'Chrysolepis chrysophylla',
    common: 'Giant chinkapin'
  },
  CUNO: {
    fofem5: 'CUNO',
    mortEq: 1,
    barkEq: 2,
    regions: 2,
    scientific: 'Cupressus nootkatensis',
    common: 'Nootka cypress'
  },
  CUTH: {
    fofem5: 'CUTH',
    mortEq: 1,
    barkEq: 4,
    regions: 2,
    scientific: 'Cupressus thyoides',
    common: 'Atlantic white cedar'
  },
  QUTE: {
    fofem5: 'QUTE',
    mortEq: 1,
    barkEq: 9,
    regions: 34,
    scientific: 'Quercus texana',
    common: 'Texas red oak'
  },
  ULRA: {
    fofem5: 'ULRA',
    mortEq: 1,
    barkEq: 12,
    regions: 34,
    scientific: 'Ulmus racemosa',
    common: 'Rock elm'
  }
}

/* eslint-disable no-prototype-builtins */
function barkThickness (fofem6Code, dbh) {
  ensureFofem6Code(fofem6Code)
  const equationIdx = data[fofem6Code].barkEq
  ensureEquationIdx(fofem6Code, equationIdx) // In FOFEM 6, longleaf pine has its own bark thickness formula and uses dbh in cm

  if (equationIdx === 40) {
    const dbhCm = 2.54 * dbh // dbh in cm

    const barkCm = 0.435 + 0.031 * dbhCm // bark thickness in cm

    return barkCm / 2.54 // bark thickness in inches
  }

  return fofemSingleBarkThicknessFactor[equationIdx] * dbh
}
/**
 * Calculates fraction of crown length scorched.
 * @param {real} treeHt Tree height (ft)
 * @param {real} baseHt Tree crown base height (ft)
 * @param {real} scorchHt Scorch height (ft)
 * @return {real} Fraction of crown length that was scorched (ft/ft)
 */

function crownLengthScorched (treeHt, baseHt, scorchHt) {
  // Tree crown length (ft) and base height (ft)
  const crownLength = treeHt - baseHt // Tree crown length scorched (ft)

  const scorchLength = positive(Math.min(scorchHt, treeHt) - baseHt) // Fraction of the crown length scorched (ft/ft)

  return divide(scorchLength, crownLength)
}
/**
 * Calculates fraction of crown volume scorched.
 * @param {real} treeHt Tree height (ft)
 * @param {real} baseHt Tree crown base height (ft)
 * @param {real} scorchHt Scorch height (ft)
 * @return {real} Fraction of crown volume that was scorched (ft3/ft3)
 */

function crownVolumeScorched (treeHt, baseHt, scorchHt) {
  // Tree crown length (ft) and base height (ft)
  const crownLength = treeHt - baseHt // Tree crown length scorched (ft)

  const scorchLength = positive(Math.min(scorchHt, treeHt) - baseHt) // Fraction of the crown volume scorched (ft3/ft3)

  return divide(scorchLength * (2 * crownLength - scorchLength), crownLength * crownLength)
}
function ensureEquationIdx (fofem6Code, equationIdx) {
  if (equationIdx < 0 || equationIdx >= fofemSingleBarkThicknessFactor.length) {
    throw new Error("Tree Mortality Fofem6 species code '".concat(fofem6Code, "' bark thickness index '").concat(equationIdx, "' is invalid"))
  }
}
function ensureFofem6Code (fofem6Code) {
  if (!hasFofem6Code(fofem6Code)) {
    throw new Error("Tree Mortality Fofem6 species code '".concat(fofem6Code, "' is invalid"))
  }
}
function fofem6Codes () {
  return Object.keys(data)
}
function hasFofem6Code (fofem6Code) {
  return data.hasOwnProperty(fofem6Code)
}
/**
 *  Calculates probability of tree mortality using the FOFEM 6.0
 *  equations for trees with dbh >= 1.
 *
 *  This is only a partial implementation of the FOFEM mortality algorithm.
 *  Specifically, it only implements those cases where the tree dbh >= 1".
 *  It also excludes the FOFEM special case of \e Populus \e tremuloides,
 *  which requires additional inputs (namely, flame height and fire severity).
 *
 * @param {string} fofem6Code FOFEM 6 tree species code
 * @param {number} dbh Tree diameter at breast height (in)
 * @param {number} treeHt Tree total height (ft)
 * @param {number} baseHt Tree crown base height (ft)
 * @param {number} scorchHt Scorch height (ft)
 */

function mortalityRate (fofem6Code, dbh, treeHt, baseHt, scorchHt) {
  const clsFraction = crownLengthScorched(treeHt, baseHt, scorchHt)
  const cvsFraction = crownVolumeScorched(treeHt, baseHt, scorchHt)
  const clsPercent = 100 * clsFraction
  const cvsPercent = 100 * cvsFraction
  const equationId = data[fofem6Code].mortEq
  let mr = 0 // Pat requested that if scorch ht is zero, then mortality is zero

  if (scorchHt <= 0) {
    return mr
  } // Equation 5 is specifically for Pinus palustris (longleaf pine)
  // Note that bark thickness is in cm

  if (equationId === 5) {
    // This equation uses crown volume scorched as a scale of 1-10
    const cvsScale = cvsPercent / 10
    const barkCm = 2.54 * barkThickness(fofem6Code, dbh)
    mr = 0.169 + 5.136 * barkCm + 14.492 * barkCm * barkCm - 0.348 * cvsScale * cvsScale
    mr = 1 / (1 + Math.exp(mr))
  } // Equation 10 is specifically for Abies concolor (white fir)
  else if (equationId === 10) {
    mr = -3.5083 + 0.0956 * clsPercent - 0.00184 * clsPercent * clsPercent + 0.000017 * clsPercent * clsPercent * clsPercent
    mr = 1 / (1 + Math.exp(-mr))
  } // Equation 11 is specifically for Abies lasiocarpa (subalpine fir)
  // and Abies grandis (grad fir)
  else if (equationId === 11) {
    mr = -1.695 + 0.2071 * cvsPercent - 0.0047 * cvsPercent * cvsPercent + 0.000035 * cvsPercent * cvsPercent * cvsPercent
    mr = 1 / (1 + Math.exp(-mr))
  } // Equation 12 is specifically for Libocedrus decurrens (incense cedar)
  else if (equationId === 12) {
    mr = -4.2466 + 0.000007172 * clsPercent * clsPercent * clsPercent
    mr = 1 / (1 + Math.exp(-mr))
  } // Equation 14 is specifically for Larix occidentalis (western larch)
  // Note that this is from Hood, so dbh is in cm
  else if (equationId === 14) {
    mr = -1.6594 + 0.0327 * cvsPercent - 0.0489 * (2.54 * dbh)
    mr = 1 / (1 + Math.exp(-mr))
  } // Equation 15 is specifically for Picea engelmannii (Englemann spruce)
  else if (equationId === 15) {
    mr = 0.0845 + 0.0445 * cvsPercent
    mr = 1 / (1 + Math.exp(-mr))
  } // Equation 16 is specifically for Abies magnifica (red fir)
  else if (equationId === 16) {
    mr = -2.3085 + 0.000004059 * clsPercent * clsPercent * clsPercent
    mr = 1 / (1 + Math.exp(-mr))
  } // Equation 17 is specifically for Pinus albicaulis (whitebark pine)
  // and Pinus contorta (lodgepole pine)
  // Note that this is from Hood, so dbh is in cm
  else if (equationId === 17) {
    mr = -0.3268 + 0.1387 * cvsPercent - 0.0033 * cvsPercent * cvsPercent + 0.000025 * cvsPercent * cvsPercent * cvsPercent - 0.0266 * (2.54 * dbh)
    mr = 1 / (1 + Math.exp(-mr))
  } // Equation 18 is specifically for Pinus lambertiana (sugar pine)
  else if (equationId === 18) {
    mr = -2.0588 + 0.000814 * clsPercent * clsPercent
    mr = 1 / (1 + Math.exp(-mr))
  } // Equation 19 is specifically for Pinus ponderosa (ponderosa pine)
  // and Pinus jeffreyi (Jeffry pine)
  else if (equationId === 19) {
    mr = -2.7103 + 0.000004093 * cvsPercent * cvsPercent * cvsPercent
    mr = 1 / (1 + Math.exp(-mr))
  } // Equation 20 is specifically for Pseudotsuga menziesii (Douglas-fir)
  else if (equationId === 20) {
    mr = -2.0346 + 0.0906 * cvsPercent - 0.0022 * cvsPercent * cvsPercent + 0.000019 * cvsPercent * cvsPercent * cvsPercent
    mr = 1 / (1 + Math.exp(-mr))
  } // Equation 1 is the default mortality equation for all species with dbh > 1"
  // Equation 3 is for spruce species
  // its the same as Equation 1 but with a minimum value of 0.8
  else {
    // if (equationId === 1 || equationId === 3) {
    const bark = barkThickness(fofem6Code, dbh)
    mr = -1.941 + 6.316 * (1 - Math.exp(-bark)) - 5.35 * cvsFraction * cvsFraction
    mr = 1 / (1 + Math.exp(mr))
    mr = equationId === 3 ? Math.max(0.8, mr) : mr
  }

  return fraction(mr)
}

/**
 * @file Exported WFSP western aspen dynamic fuel model equations
 * as described by Brown and Simmerman (1986) and implemented by BehavePlus V6.
 * @version 0.1.0
 * @copyright Systems for Environmental Management 2020
 * @author Collin D. Bevins
 * @license MIT
 */
const ppsf = 2000 / 43560 // Array curing levels are [0, 0.3, 0.5, 0.7 0.9, 1]

const Table = {
  aspenShrub: {
    depth: 0.65,
    dead1Load: [0.8, 0.893, 1.056, 1.218, 1.379, 1.4595],
    dead1Savr: [1440.0, 1620.0, 1910.0, 2090.0, 2220.0, 2285.0],
    dead10Load: 0.975,
    liveHerbLoad: [0.335, 0.234, 0.167, 0.1, 0.033, 0.0],
    liveStemLoad: [0.403, 0.403, 0.333, 0.283, 0.277, 0.274],
    liveStemSavr: [2440.0, 2440.0, 2310.0, 2090.0, 1670.0, 1670.0]
  },
  aspenTallForb: {
    depth: 0.3,
    dead1Load: [0.738, 0.93, 1.056, 1.183, 1.309, 1.372],
    dead1Savr: [1480.0, 1890.0, 2050.0, 2160.0, 2240.0, 2280.0],
    dead10Load: 0.475,
    liveHerbLoad: [0.665, 0.465, 0.332, 0.199, 0.067, 0.0],
    liveStemLoad: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    liveStemSavr: [2440.0, 2440.0, 2440.0, 2440.0, 2440.0, 2440.0]
  },
  aspenLowForb: {
    depth: 0.18,
    dead1Load: [0.601, 0.645, 0.671, 0.699, 0.73, 0.7455],
    dead1Savr: [1400.0, 1540.0, 1620.0, 1690.0, 1750.0, 1780.0],
    dead10Load: 1.035,
    liveHerbLoad: [0.15, 0.105, 0.075, 0.045, 0.015, 0.0],
    liveStemLoad: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    liveStemSavr: [2440.0, 2440.0, 2440.0, 2440.0, 2440.0, 2440.0]
  },
  mixedShrub: {
    depth: 0.5,
    dead1Load: [0.88, 0.906, 1.037, 1.167, 1.3, 1.3665],
    dead1Savr: [1350.0, 1420.0, 1710.0, 1910.0, 2060.0, 2135.0],
    dead10Load: 1.34,
    liveHerbLoad: [0.1, 0.07, 0.05, 0.03, 0.01, 0.0],
    liveStemLoad: [0.455, 0.455, 0.364, 0.29, 0.261, 0.2465],
    liveStemSavr: [2530.0, 2530.0, 2410.0, 2210.0, 1800.0, 1800.0]
  },
  mixedForb: {
    depth: 0.18,
    dead1Load: [0.754, 0.797, 0.825, 0.854, 0.884, 0.899],
    dead1LoadDEPRECATED: [0.754, 0.797, 0.825, 1.167, 0.884, 0.899],
    dead1Savr: [1420.0, 1540.0, 1610.0, 1670.0, 1720.0, 1745.0],
    dead10Load: 1.115,
    liveHerbLoad: [0.15, 0.105, 0.075, 0.045, 0.015, 0.0],
    liveStemLoad: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    liveStemSavr: [2440.0, 2440.0, 2440.0, 2440.0, 2440.0, 2440.0]
  }
}
const Types$1 = Object.keys(Table)
function interpolate (curingLevel, valueAtLevel) {
  const Curing = [0.0, 0.3, 0.5, 0.7, 0.9, 1.000000001]
  const cl = fraction(curingLevel)
  let fraction$1 = 0

  for (let idx = 1; idx <= 4; idx += 1) {
    if (cl <= Curing[idx]) {
      fraction$1 = 1 - (Curing[idx] - cl) / (Curing[idx] - Curing[idx - 1])
      return valueAtLevel[idx - 1] + fraction$1 * (valueAtLevel[idx] - valueAtLevel[idx - 1])
    }
  }

  return valueAtLevel[5]
}
function has (fuelType) {
  return Object.keys(Table).includes(fuelType)
}
function depth (fuelType) {
  return has(fuelType) ? Table[fuelType].depth : 0.01
}
function deadFineLoad$1 (fuelType, curingLevel) {
  return has(fuelType) ? ppsf * interpolate(curingLevel, Table[fuelType].dead1Load) : 0
}
function deadFineSavr (fuelType, curingLevel) {
  return has(fuelType) ? interpolate(curingLevel, Table[fuelType].dead1Savr) : 1
}
function deadSmallLoad$1 (fuelType) {
  return has(fuelType) ? ppsf * Table[fuelType].dead10Load : 0
}

function liveHerbLoad$1 (fuelType, curingLevel) {
  return has(fuelType) ? ppsf * interpolate(curingLevel, Table[fuelType].liveHerbLoad) : 0
} // Live stem

function liveStemLoad (fuelType, curingLevel) {
  return has(fuelType) ? ppsf * interpolate(curingLevel, Table[fuelType].liveStemLoad) : 0
}
function liveStemSavr (fuelType, curingLevel) {
  return has(fuelType) ? interpolate(curingLevel, Table[fuelType].liveStemSavr) : 1
}

/**
 * @file Exported WFSP wind functions as implemented by BehavePlus v6.
 * @version 0.1.0
 * @copyright Systems for Environmental Management 2020
 * @author Collin D. Bevins <cbevins@montana.com>
 * @license MIT
 */
function speedAt10m (ws20ft) {
  return 1.13 * ws20ft
}
function speedAt20ft (ws10m) {
  return ws10m / 1.13
}
function speedAt20ftFromMidflame (wsmid, mwaf) {
  return mwaf > 0 ? divide(wsmid, mwaf) : wsmid
}
function speedAtMidflame (ws20ft, mwaf) {
  return mwaf * ws20ft
}

/**
 * Declares the specialized BehavePlus Config Variants.
 *
 * Note that classes derived from Crucible.Variant.Option() and COnfig()
 * require an array of options argument.
 */

/**
 * Config is an Option Variant whose sole purpose is to define
 * Dag configuration options with their own 'node instanceof Config' test
 */

const Config = /* #__PURE__ */(function (_Option) {
  _inherits(Config, _Option)

  const _super = _createSuper(Config)

  function Config () {
    _classCallCheck(this, Config)

    return _super.apply(this, arguments)
  }

  return Config
}(Option)) // Configuration options

const ConfigModuleActive = /* #__PURE__ */(function (_Config) {
  _inherits(ConfigModuleActive, _Config)

  const _super2 = _createSuper(ConfigModuleActive)

  function ConfigModuleActive () {
    _classCallCheck(this, ConfigModuleActive)

    return _super2.call(this, ['active', 'inactive'])
  }

  return ConfigModuleActive
}(Config))
const ConfigLinkCrownFire = /* #__PURE__ */(function (_Config2) {
  _inherits(ConfigLinkCrownFire, _Config2)

  const _super3 = _createSuper(ConfigLinkCrownFire)

  function ConfigLinkCrownFire () {
    _classCallCheck(this, ConfigLinkCrownFire)

    return _super3.call(this, ['linkedToCrownFire', 'standAlone'])
  }

  return ConfigLinkCrownFire
}(Config))
const ConfigLinkFireEllipse = /* #__PURE__ */(function (_Config3) {
  _inherits(ConfigLinkFireEllipse, _Config3)

  const _super4 = _createSuper(ConfigLinkFireEllipse)

  function ConfigLinkFireEllipse () {
    _classCallCheck(this, ConfigLinkFireEllipse)

    return _super4.call(this, ['linkedToFireEllipse', 'standAlone'])
  }

  return ConfigLinkFireEllipse
}(Config))
const ConfigLinkScorchHeight = /* #__PURE__ */(function (_Config4) {
  _inherits(ConfigLinkScorchHeight, _Config4)

  const _super5 = _createSuper(ConfigLinkScorchHeight)

  function ConfigLinkScorchHeight () {
    _classCallCheck(this, ConfigLinkScorchHeight)

    return _super5.call(this, ['linkedToScorchHeight', 'standAlone'])
  }

  return ConfigLinkScorchHeight
}(Config))
const ConfigLinkSurfaceFire = /* #__PURE__ */(function (_Config5) {
  _inherits(ConfigLinkSurfaceFire, _Config5)

  const _super6 = _createSuper(ConfigLinkSurfaceFire)

  function ConfigLinkSurfaceFire () {
    _classCallCheck(this, ConfigLinkSurfaceFire)

    return _super6.call(this, ['linkedToSurfaceFire', 'standAlone'])
  }

  return ConfigLinkSurfaceFire
}(Config)) // bp6 #11 Surface > Input  > Chaparral > Total load is: [specified, est]

const ConfigChaparralTotalLoad = /* #__PURE__ */(function (_Config6) {
  _inherits(ConfigChaparralTotalLoad, _Config6)

  const _super7 = _createSuper(ConfigChaparralTotalLoad)

  function ConfigChaparralTotalLoad () {
    _classCallCheck(this, ConfigChaparralTotalLoad)

    return _super7.call(this, [// .header('Chaparral total fuel load is')
      'input', // 'entered as input', true)
      'estimated']) // 'estimated from Chaparral depth');
  }

  return ConfigChaparralTotalLoad
}(Config)) // bp6 #2 - Surface > Input  > Moisture > Herb Curing: [est, inp]

const ConfigCuredHerbFraction = /* #__PURE__ */(function (_Config7) {
  _inherits(ConfigCuredHerbFraction, _Config7)

  const _super8 = _createSuper(ConfigCuredHerbFraction)

  function ConfigCuredHerbFraction () {
    _classCallCheck(this, ConfigCuredHerbFraction)

    return _super8.call(this, [// .header('Behave fuel model cured herb fraction is')
      'input', // 'entered as input', true)
      'estimated']) // 'estimated from live fuel moisture');
  }

  return ConfigCuredHerbFraction
}(Config)) // bp6 #1 Surface > Input  > Fuel:
// [key, std, exp, harm, arith, pg, wa, ch]
// Bpx splits bp6 config #1 into two configs; primary.fuel and secondary.fuel

const ConfigPrimaryFuels = /* #__PURE__ */(function (_Config8) {
  _inherits(ConfigPrimaryFuels, _Config8)

  const _super9 = _createSuper(ConfigPrimaryFuels)

  function ConfigPrimaryFuels () {
    _classCallCheck(this, ConfigPrimaryFuels)

    return _super9.call(this, [// .header('Primary fuels are specified by entering')
      'catalog', // 'a fuel model catalog key', true)
      'behave', // 'standard BehavePlus fuel parameters')
      'chaparral', // 'chaparral dynamic fuel parameters')
      'palmettoGallberry', // 'palmetto-gallberry dynamic fuel parameters')
      'westernAspen']) // 'western aspen dynamic fuel models');
  }

  return ConfigPrimaryFuels
}(Config)) // bp6 #1 Surface > Input  > Fuel:
// [key, std, exp, harm, arith, pg, wa, ch]
// Bpx splits bp6 config #1 into two configs; primary.fuel and secondary.fuel

const ConfigSecondaryFuels = /* #__PURE__ */(function (_Config9) {
  _inherits(ConfigSecondaryFuels, _Config9)

  const _super10 = _createSuper(ConfigSecondaryFuels)

  function ConfigSecondaryFuels () {
    _classCallCheck(this, ConfigSecondaryFuels)

    return _super10.call(this, [// .header('Secondary fuels are specified by entering')
      'none', // 'there are no secondary fuels', true);
      'catalog', // 'a fuel model catalog key')
      'behave', // 'standard BehavePlus fuel parameters')
      'chaparral', // 'chaparral dynamic fuel parameters')
      'palmettoGallberry', // 'palmetto-gallberry dynamic fuel parameters')
      'westernAspen']) // 'western aspen dynamic fuel models')
  }

  return ConfigSecondaryFuels
}(Config)) // bp6 #3 - Surface > Input  > Moisture > Fuel Moisture:
// [ind, cat, mixed, scen]

const ConfigMoistureContents = /* #__PURE__ */(function (_Config10) {
  _inherits(ConfigMoistureContents, _Config10)

  const _super11 = _createSuper(ConfigMoistureContents)

  function ConfigMoistureContents () {
    _classCallCheck(this, ConfigMoistureContents)

    return _super11.call(this, [// .header('Fuel moistures are specified by entering')
      'individual', // 'the 3 dead and 2 live fuel moistures', true)
      'liveCategory', // 'the 3 dead moistures and a singe live category moisture')
      'category']) // 'the dead and live category moistures only')
    // 'catalog' // 'a fuel moisture catalog key');
  }

  return ConfigMoistureContents
}(Config)) // bp6 #4 Surface > Input  > Wind Speed > Entered at:
// [mid, 20-wafInp, 20-wafEst, 10-wafInp, 10-wafEst]
// Bpx slipts Bp6 config #4 into 2 configs, fuel.waf and wind.speed

const ConfigWindSpeedAdjustmentFactor = /* #__PURE__ */(function (_Config11) {
  _inherits(ConfigWindSpeedAdjustmentFactor, _Config11)

  const _super12 = _createSuper(ConfigWindSpeedAdjustmentFactor)

  function ConfigWindSpeedAdjustmentFactor () {
    _classCallCheck(this, ConfigWindSpeedAdjustmentFactor)

    return _super12.call(this, [// .header('Midflame wind speed adjustment factor is')
      'input', // 'entered as input', true)
      'estimated']) // 'estimated from canopy and fuel parameters');
  }

  return ConfigWindSpeedAdjustmentFactor
}(Config)) // bp6 #7 Surface > Input  > Slope > Slope is [percent, degrees]
// bp6 #8 Surface > Input  > Slope > Slope is [input, map]
// BPX combined Bp6 configs #7 and #8

const ConfigSlopeSteepness = /* #__PURE__ */(function (_Config12) {
  _inherits(ConfigSlopeSteepness, _Config12)

  const _super13 = _createSuper(ConfigSlopeSteepness)

  function ConfigSlopeSteepness () {
    _classCallCheck(this, ConfigSlopeSteepness)

    return _super13.call(this, [// .header('Slope steepness is')
      'ratio', // 'entered as ratio of vertical rise to horizontal reach', true)
      'degrees', // 'entered as degrees of angle above the horizontal plane')
      'map']) // 'estimated from map measurements');
  }

  return ConfigSlopeSteepness
}(Config)) // bp6 #5 Surface > Input  > Wind Speed > Wind is:
// [always upslope, specified]

const ConfigWindDirection = /* #__PURE__ */(function (_Config13) {
  _inherits(ConfigWindDirection, _Config13)

  const _super14 = _createSuper(ConfigWindDirection)

  function ConfigWindDirection () {
    _classCallCheck(this, ConfigWindDirection)

    return _super14.call(this, [// .header('Wind direction is')
      'sourceFromNorth', // 'the direction FROM which the wind is blowing (degrees from NORTH)')
      'headingFromUpslope', // 'the direcion TOWARDS which the wind is blowing (degrees from UPSLOPE)', true)
      'upslope']) // 'assumed to be blowing upslope');
  }

  return ConfigWindDirection
}(Config)) // bp6 #4 Surface > Input  > Wind Speed > Entered at:
// [mid, 20-wafInp, 20-wafEst, 10-wafInp, 10-wafEst]
// Bpx slipts Bp6 config #4 into 2 configs, fuel.waf and wind.speed

const ConfigWindSpeed = /* #__PURE__ */(function (_Config14) {
  _inherits(ConfigWindSpeed, _Config14)

  const _super15 = _createSuper(ConfigWindSpeed)

  function ConfigWindSpeed () {
    _classCallCheck(this, ConfigWindSpeed)

    return _super15.call(this, [// .header('Wind speed is entered for')
      'at10m', // '10-m height')
      'at20ft', // '20-ft height', true)
      'atMidflame']) // 'midflame height');
  }

  return ConfigWindSpeed
}(Config))
const ConfigFirelineIntensity = /* #__PURE__ */(function (_Config15) {
  _inherits(ConfigFirelineIntensity, _Config15)

  const _super16 = _createSuper(ConfigFirelineIntensity)

  function ConfigFirelineIntensity () {
    _classCallCheck(this, ConfigFirelineIntensity)

    return _super16.call(this, [// .header('The fireline intensity is')
      'firelineIntensity', // 'entered as input', true)
      'flameLength']) // 'estimated from the flame length input');
  }

  return ConfigFirelineIntensity
}(Config))
const ConfigFireLengthToWidthRatio = /* #__PURE__ */(function (_Config16) {
  _inherits(ConfigFireLengthToWidthRatio, _Config16)

  const _super17 = _createSuper(ConfigFireLengthToWidthRatio)

  function ConfigFireLengthToWidthRatio () {
    _classCallCheck(this, ConfigFireLengthToWidthRatio)

    return _super17.call(this, [// .header('The fire ellipse length-to-width ratio is')
      'lengthToWidthRatio', // 'entered as input', true)
      'effectiveWindSpeed']) // 'estimated from the effective wind speed input');
  }

  return ConfigFireLengthToWidthRatio
}(Config)) // bp6 #6 Surface > Input  > Wind Speed > Impose max wind speed limit?

const ConfigEffectiveWindSpeedLimit = /* #__PURE__ */(function (_Config17) {
  _inherits(ConfigEffectiveWindSpeedLimit, _Config17)

  const _super18 = _createSuper(ConfigEffectiveWindSpeedLimit)

  function ConfigEffectiveWindSpeedLimit () {
    _classCallCheck(this, ConfigEffectiveWindSpeedLimit)

    return _super18.call(this, [// .header('The effective wind speed limit is')
      'applied', // 'applied', true)
      'ignored']) // 'ignored');
  }

  return ConfigEffectiveWindSpeedLimit
}(Config)) // New to BPX

const ConfigFireWeightingMethod = /* #__PURE__ */(function (_Config18) {
  _inherits(ConfigFireWeightingMethod, _Config18)

  const _super19 = _createSuper(ConfigFireWeightingMethod)

  function ConfigFireWeightingMethod () {
    _classCallCheck(this, ConfigFireWeightingMethod)

    return _super19.call(this, [// .header('Maximum fire spread rate of 2 surface fuel types is based on')
      'arithmetic', // 'arithmetic mean spread rate')
      'expected', // 'expected value spread rate')
      'harmonic']) // 'harmonic mean spread rate', true);
  }

  return ConfigFireWeightingMethod
}(Config)) // bp6 #10 Surface > Input  > Directions > Wind & Fire Dir: [wrt upslope, wrt north]

const ConfigFireVector = /* #__PURE__ */(function (_Config19) {
  _inherits(ConfigFireVector, _Config19)

  const _super20 = _createSuper(ConfigFireVector)

  function ConfigFireVector () {
    _classCallCheck(this, ConfigFireVector)

    return _super20.call(this, [// .header('Fire vector direction inputs are')
      'fromHead', // 'degrees clockwise from direction of maximum spread', true)
      'fromUpslope', // 'degrees clockwise from upslope')
      'fromNorth']) // 'degrees clockwise from north');
  }

  return ConfigFireVector
}(Config)) // bp6 #9 Surface > Input  > Directions > Spread is [head, back, flank, psi, beta]
// BPX implements all spread direction options at any time instead of selecting just one
// bp6 #12 - Crown > Input  > Use [roth, s&r]
// BPX - May not be necessary: S&R is applied only if passive ouputs requested
// export const CrownFireMethod_UNUSED = [
//   // .header('Crown fire is estimated via')
//   'rothermel', // 'Rothermel')
//   'scottReinhardt' // 'Scott and Reinhardt (wind must blow upslope)', true);
// ]
// bp6 #13 - Crown > Input  > FLI [fl, fli]
// BPX- Required only in STANDALONE mode
// const CrownFireFli_UNUSED = [
//   // .header('The Crown Module is')
//   'surface', // 'linked to the Surface Module', true)
//   'flameLength', // 'run stand-alone using flame length input')
//   'firelineIntensity' // 'run stand-alone using fireline intensity input');
// ]
// bp6 # 14 - Contain > Input  > resources [single, multiple]
// const ContainResources_UNUSED = [
//   // .header('Contain module allows')
//   'singleResource', // 'a single firefighting resource')
//   'multipleResources' // 'multiple firefighting resources', true);
// ]

/**
 * Declares the specialized BehavePlus Option Variants used by nodes and equations.
 *
 * Note that classes derived from Crucible.Variant.Option() require an array of options argument.
 */

const ChaparralTypeOption = /* #__PURE__ */(function (_Option) {
  _inherits(ChaparralTypeOption, _Option)

  const _super = _createSuper(ChaparralTypeOption)

  function ChaparralTypeOption () {
    _classCallCheck(this, ChaparralTypeOption)

    return _super.call(this, Types)
  }

  return ChaparralTypeOption
}(Option))
const CrownFireInitiationTypeOption = /* #__PURE__ */(function (_Option2) {
  _inherits(CrownFireInitiationTypeOption, _Option2)

  const _super2 = _createSuper(CrownFireInitiationTypeOption)

  function CrownFireInitiationTypeOption () {
    _classCallCheck(this, CrownFireInitiationTypeOption)

    return _super2.call(this, InitiationTypes)
  }

  return CrownFireInitiationTypeOption
}(Option))
const FuelModelDomainOption = /* #__PURE__ */(function (_Option3) {
  _inherits(FuelModelDomainOption, _Option3)

  const _super3 = _createSuper(FuelModelDomainOption)

  function FuelModelDomainOption () {
    _classCallCheck(this, FuelModelDomainOption)

    return _super3.call(this, Domains)
  }

  return FuelModelDomainOption
}(Option))
const FuelModelKeyOption = /* #__PURE__ */(function (_Option4) {
  _inherits(FuelModelKeyOption, _Option4)

  const _super4 = _createSuper(FuelModelKeyOption)

  function FuelModelKeyOption () {
    let _this

    _classCallCheck(this, FuelModelKeyOption)

    _this = _super4.call(this, keys())
    _this._specs._defaultValue = '10'
    return _this
  }

  return FuelModelKeyOption
}(Option))
const IgnitionFuelTypeOption = /* #__PURE__ */(function (_Option5) {
  _inherits(IgnitionFuelTypeOption, _Option5)

  const _super5 = _createSuper(IgnitionFuelTypeOption)

  function IgnitionFuelTypeOption () {
    _classCallCheck(this, IgnitionFuelTypeOption)

    return _super5.call(this, LightningFuels)
  }

  return IgnitionFuelTypeOption
}(Option))
const IgnitionLightningChargeOption = /* #__PURE__ */(function (_Option6) {
  _inherits(IgnitionLightningChargeOption, _Option6)

  const _super6 = _createSuper(IgnitionLightningChargeOption)

  function IgnitionLightningChargeOption () {
    _classCallCheck(this, IgnitionLightningChargeOption)

    return _super6.call(this, LightningCharges)
  }

  return IgnitionLightningChargeOption
}(Option))
const SpottingSourceLocationOption = /* #__PURE__ */(function (_Option7) {
  _inherits(SpottingSourceLocationOption, _Option7)

  const _super7 = _createSuper(SpottingSourceLocationOption)

  function SpottingSourceLocationOption () {
    _classCallCheck(this, SpottingSourceLocationOption)

    return _super7.call(this, locations())
  }

  return SpottingSourceLocationOption
}(Option))
const TorchingTreeSpeciesOption = /* #__PURE__ */(function (_Option8) {
  _inherits(TorchingTreeSpeciesOption, _Option8)

  const _super8 = _createSuper(TorchingTreeSpeciesOption)

  function TorchingTreeSpeciesOption () {
    _classCallCheck(this, TorchingTreeSpeciesOption)

    return _super8.call(this, TorchingTreeSpecies)
  }

  return TorchingTreeSpeciesOption
}(Option))
const TreeSpeciesFofem6Option = /* #__PURE__ */(function (_Option9) {
  _inherits(TreeSpeciesFofem6Option, _Option9)

  const _super9 = _createSuper(TreeSpeciesFofem6Option)

  function TreeSpeciesFofem6Option () {
    _classCallCheck(this, TreeSpeciesFofem6Option)

    return _super9.call(this, fofem6Codes())
  }

  return TreeSpeciesFofem6Option
}(Option))
const WesternAspenTypeOption = /* #__PURE__ */(function (_Option10) {
  _inherits(WesternAspenTypeOption, _Option10)

  const _super10 = _createSuper(WesternAspenTypeOption)

  function WesternAspenTypeOption () {
    _classCallCheck(this, WesternAspenTypeOption)

    return _super10.call(this, Types$1)
  }

  return WesternAspenTypeOption
}(Option))

const CompassAzimuth = /* #__PURE__ */(function (_Quantity) {
  _inherits(CompassAzimuth, _Quantity)

  const _super = _createSuper(CompassAzimuth)

  function CompassAzimuth () {
    _classCallCheck(this, CompassAzimuth)

    return _super.call(this, ['deg'], 0, 360)
  }

  return CompassAzimuth
}(Quantity))
const Factor = /* #__PURE__ */(function (_Float) {
  _inherits(Factor, _Float)

  const _super2 = _createSuper(Factor)

  function Factor () {
    _classCallCheck(this, Factor)

    return _super2.apply(this, arguments)
  }

  return Factor
}(Float))
const Fraction = /* #__PURE__ */(function (_Quantity2) {
  _inherits(Fraction, _Quantity2)

  const _super3 = _createSuper(Fraction)

  function Fraction () {
    _classCallCheck(this, Fraction)

    return _super3.call(this, ['ratio', 'percent', '%'], 0, 1)
  }

  return Fraction
}(Quantity))
const NonNegativeFactor = /* #__PURE__ */(function (_Float2) {
  _inherits(NonNegativeFactor, _Float2)

  const _super4 = _createSuper(NonNegativeFactor)

  function NonNegativeFactor () {
    _classCallCheck(this, NonNegativeFactor)

    return _super4.call(this, 0, 0, 0)
  }

  return NonNegativeFactor
}(Float)) // Part 2 - Specialized BehavePlus Variants

const AirTemperature = /* #__PURE__ */(function (_Quantity3) {
  _inherits(AirTemperature, _Quantity3)

  const _super5 = _createSuper(AirTemperature)

  function AirTemperature () {
    _classCallCheck(this, AirTemperature)

    return _super5.call(this, ['F', 'C'])
  }

  return AirTemperature
}(Quantity))
const CrownFillFraction = /* #__PURE__ */(function (_Fraction) {
  _inherits(CrownFillFraction, _Fraction)

  const _super6 = _createSuper(CrownFillFraction)

  function CrownFillFraction () {
    _classCallCheck(this, CrownFillFraction)

    return _super6.apply(this, arguments)
  }

  return CrownFillFraction
}(Fraction))
const CrownFireActiveRatio = /* #__PURE__ */(function (_NonNegativeFactor) {
  _inherits(CrownFireActiveRatio, _NonNegativeFactor)

  const _super7 = _createSuper(CrownFireActiveRatio)

  function CrownFireActiveRatio () {
    _classCallCheck(this, CrownFireActiveRatio)

    return _super7.apply(this, arguments)
  }

  return CrownFireActiveRatio
}(NonNegativeFactor))
const CrownFireBurnedFraction = /* #__PURE__ */(function (_Fraction2) {
  _inherits(CrownFireBurnedFraction, _Fraction2)

  const _super8 = _createSuper(CrownFireBurnedFraction)

  function CrownFireBurnedFraction () {
    _classCallCheck(this, CrownFireBurnedFraction)

    return _super8.apply(this, arguments)
  }

  return CrownFireBurnedFraction
}(Fraction))
const CrownRatioFraction = /* #__PURE__ */(function (_Fraction3) {
  _inherits(CrownRatioFraction, _Fraction3)

  const _super9 = _createSuper(CrownRatioFraction)

  function CrownRatioFraction () {
    _classCallCheck(this, CrownRatioFraction)

    return _super9.apply(this, arguments)
  }

  return CrownRatioFraction
}(Fraction))
const CrownTransitionRatio = /* #__PURE__ */(function (_NonNegativeFactor2) {
  _inherits(CrownTransitionRatio, _NonNegativeFactor2)

  const _super10 = _createSuper(CrownTransitionRatio)

  function CrownTransitionRatio () {
    _classCallCheck(this, CrownTransitionRatio)

    return _super10.apply(this, arguments)
  }

  return CrownTransitionRatio
}(NonNegativeFactor))
const Documentation = /* #__PURE__ */(function (_Text) {
  _inherits(Documentation, _Text)

  const _super11 = _createSuper(Documentation)

  function Documentation () {
    _classCallCheck(this, Documentation)

    return _super11.call(this, '', 0, 80)
  }

  return Documentation
}(Text))
const FireArea = /* #__PURE__ */(function (_Quantity4) {
  _inherits(FireArea, _Quantity4)

  const _super12 = _createSuper(FireArea)

  function FireArea () {
    _classCallCheck(this, FireArea)

    return _super12.call(this, ['ft2', 'ac', 'mi2', 'm2', 'ha', 'km2'])
  }

  return FireArea
}(Quantity))
const FireDampingCoefficient = /* #__PURE__ */(function (_Fraction4) {
  _inherits(FireDampingCoefficient, _Fraction4)

  const _super13 = _createSuper(FireDampingCoefficient)

  function FireDampingCoefficient () {
    _classCallCheck(this, FireDampingCoefficient)

    return _super13.apply(this, arguments)
  }

  return FireDampingCoefficient
}(Fraction))
const FireElapsedTime = /* #__PURE__ */(function (_Quantity5) {
  _inherits(FireElapsedTime, _Quantity5)

  const _super14 = _createSuper(FireElapsedTime)

  function FireElapsedTime () {
    _classCallCheck(this, FireElapsedTime)

    return _super14.call(this, ['min', 'h', 'd'])
  }

  return FireElapsedTime
}(Quantity))
const FireFirelineIntensity = /* #__PURE__ */(function (_Quantity6) {
  _inherits(FireFirelineIntensity, _Quantity6)

  const _super15 = _createSuper(FireFirelineIntensity)

  function FireFirelineIntensity () {
    _classCallCheck(this, FireFirelineIntensity)

    return _super15.call(this, ['btu/ft/s', 'J/m/s', 'W/m'])
  }

  return FireFirelineIntensity
}(Quantity))
const FireFlameDuration = /* #__PURE__ */(function (_Quantity7) {
  _inherits(FireFlameDuration, _Quantity7)

  const _super16 = _createSuper(FireFlameDuration)

  function FireFlameDuration () {
    _classCallCheck(this, FireFlameDuration)

    return _super16.call(this, ['min', 's', 'h'])
  }

  return FireFlameDuration
}(Quantity))
const FireFlameLength = /* #__PURE__ */(function (_Quantity8) {
  _inherits(FireFlameLength, _Quantity8)

  const _super17 = _createSuper(FireFlameLength)

  function FireFlameLength () {
    _classCallCheck(this, FireFlameLength)

    return _super17.call(this, ['ft', 'm'])
  }

  return FireFlameLength
}(Quantity))
const FireHeatPerUnitArea = /* #__PURE__ */(function (_Quantity9) {
  _inherits(FireHeatPerUnitArea, _Quantity9)

  const _super18 = _createSuper(FireHeatPerUnitArea)

  function FireHeatPerUnitArea () {
    _classCallCheck(this, FireHeatPerUnitArea)

    return _super18.call(this, ['btu/ft2', 'J/m2'])
  }

  return FireHeatPerUnitArea
}(Quantity))
const FireLengthToWidthRatio = /* #__PURE__ */(function (_Factor) {
  _inherits(FireLengthToWidthRatio, _Factor)

  const _super19 = _createSuper(FireLengthToWidthRatio)

  function FireLengthToWidthRatio () {
    _classCallCheck(this, FireLengthToWidthRatio)

    return _super19.call(this, 1, 1)
  }

  return FireLengthToWidthRatio
}(Factor))
const FirePower = /* #__PURE__ */(function (_Quantity10) {
  _inherits(FirePower, _Quantity10)

  const _super20 = _createSuper(FirePower)

  function FirePower () {
    _classCallCheck(this, FirePower)

    return _super20.call(this, ['btu/min', 'btu/s', 'J/s', 'J/min', 'W'])
  }

  return FirePower
}(Quantity))
const FirePowerRatio = /* #__PURE__ */(function (_NonNegativeFactor3) {
  _inherits(FirePowerRatio, _NonNegativeFactor3)

  const _super21 = _createSuper(FirePowerRatio)

  function FirePowerRatio () {
    _classCallCheck(this, FirePowerRatio)

    return _super21.apply(this, arguments)
  }

  return FirePowerRatio
}(NonNegativeFactor))
const FirePropagatingFluxRatio = /* #__PURE__ */(function (_Fraction5) {
  _inherits(FirePropagatingFluxRatio, _Fraction5)

  const _super22 = _createSuper(FirePropagatingFluxRatio)

  function FirePropagatingFluxRatio () {
    _classCallCheck(this, FirePropagatingFluxRatio)

    return _super22.apply(this, arguments)
  }

  return FirePropagatingFluxRatio
}(Fraction))
const FireReactionIntensity = /* #__PURE__ */(function (_Quantity11) {
  _inherits(FireReactionIntensity, _Quantity11)

  const _super23 = _createSuper(FireReactionIntensity)

  function FireReactionIntensity () {
    _classCallCheck(this, FireReactionIntensity)

    return _super23.call(this, ['btu/ft2/min', 'J/m2/min'])
  }

  return FireReactionIntensity
}(Quantity))
const FireReactionVelocity = /* #__PURE__ */(function (_Quantity12) {
  _inherits(FireReactionVelocity, _Quantity12)

  const _super24 = _createSuper(FireReactionVelocity)

  function FireReactionVelocity () {
    _classCallCheck(this, FireReactionVelocity)

    return _super24.call(this, ['1/min', '1/s'])
  }

  return FireReactionVelocity
}(Quantity))
const FireResidenceTime = /* #__PURE__ */(function (_Quantity13) {
  _inherits(FireResidenceTime, _Quantity13)

  const _super25 = _createSuper(FireResidenceTime)

  function FireResidenceTime () {
    _classCallCheck(this, FireResidenceTime)

    return _super25.call(this, ['min', 's', 'h'])
  }

  return FireResidenceTime
}(Quantity))
const FireScorchHeight = /* #__PURE__ */(function (_Quantity14) {
  _inherits(FireScorchHeight, _Quantity14)

  const _super26 = _createSuper(FireScorchHeight)

  function FireScorchHeight () {
    _classCallCheck(this, FireScorchHeight)

    return _super26.call(this, ['ft', 'm'])
  }

  return FireScorchHeight
}(Quantity))
const FireSpotDistance = /* #__PURE__ */(function (_Quantity15) {
  _inherits(FireSpotDistance, _Quantity15)

  const _super27 = _createSuper(FireSpotDistance)

  function FireSpotDistance () {
    _classCallCheck(this, FireSpotDistance)

    return _super27.call(this, ['ft', 'm', 'ch', 'mi', 'km'])
  }

  return FireSpotDistance
}(Quantity))
const FireSpreadDistance = /* #__PURE__ */(function (_Quantity16) {
  _inherits(FireSpreadDistance, _Quantity16)

  const _super28 = _createSuper(FireSpreadDistance)

  function FireSpreadDistance () {
    _classCallCheck(this, FireSpreadDistance)

    return _super28.call(this, ['ft', 'm', 'ch', 'mi', 'km'])
  }

  return FireSpreadDistance
}(Quantity))
const FireSpreadRate = /* #__PURE__ */(function (_Quantity17) {
  _inherits(FireSpreadRate, _Quantity17)

  const _super29 = _createSuper(FireSpreadRate)

  function FireSpreadRate () {
    _classCallCheck(this, FireSpreadRate)

    return _super29.call(this, ['ft/min', 'm/min', 'ch/h', 'mi/h', 'km/h'])
  }

  return FireSpreadRate
}(Quantity))
const FuelAge = /* #__PURE__ */(function (_Quantity18) {
  _inherits(FuelAge, _Quantity18)

  const _super30 = _createSuper(FuelAge)

  function FuelAge () {
    _classCallCheck(this, FuelAge)

    return _super30.call(this, ['y'])
  }

  return FuelAge
}(Quantity))
const FuelBasalArea = /* #__PURE__ */(function (_Quantity19) {
  _inherits(FuelBasalArea, _Quantity19)

  const _super31 = _createSuper(FuelBasalArea)

  function FuelBasalArea () {
    _classCallCheck(this, FuelBasalArea)

    return _super31.call(this, ['ft2', 'm2'])
  }

  return FuelBasalArea
}(Quantity))
const FuelBedBulkDensity = /* #__PURE__ */(function (_Quantity20) {
  _inherits(FuelBedBulkDensity, _Quantity20)

  const _super32 = _createSuper(FuelBedBulkDensity)

  function FuelBedBulkDensity () {
    _classCallCheck(this, FuelBedBulkDensity)

    return _super32.call(this, ['lb/ft3', 'kg/m3'])
  }

  return FuelBedBulkDensity
}(Quantity))
const FuelBedDepth = /* #__PURE__ */(function (_Quantity21) {
  _inherits(FuelBedDepth, _Quantity21)

  const _super33 = _createSuper(FuelBedDepth)

  function FuelBedDepth () {
    _classCallCheck(this, FuelBedDepth)

    return _super33.call(this, ['ft', 'in', 'm', 'cm'], 0.01)
  }

  return FuelBedDepth
}(Quantity))
const FuelBedHeatOfPreignition = /* #__PURE__ */(function (_Quantity22) {
  _inherits(FuelBedHeatOfPreignition, _Quantity22)

  const _super34 = _createSuper(FuelBedHeatOfPreignition)

  function FuelBedHeatOfPreignition () {
    _classCallCheck(this, FuelBedHeatOfPreignition)

    return _super34.call(this, ['btu/lb', 'J/kg'])
  }

  return FuelBedHeatOfPreignition
}(Quantity))
const FuelBedPackingRatio = /* #__PURE__ */(function (_NonNegativeFactor4) {
  _inherits(FuelBedPackingRatio, _NonNegativeFactor4)

  const _super35 = _createSuper(FuelBedPackingRatio)

  function FuelBedPackingRatio () {
    _classCallCheck(this, FuelBedPackingRatio)

    return _super35.apply(this, arguments)
  }

  return FuelBedPackingRatio
}(NonNegativeFactor))
const FuelCoverFraction = /* #__PURE__ */(function (_Fraction6) {
  _inherits(FuelCoverFraction, _Fraction6)

  const _super36 = _createSuper(FuelCoverFraction)

  function FuelCoverFraction () {
    _classCallCheck(this, FuelCoverFraction)

    return _super36.apply(this, arguments)
  }

  return FuelCoverFraction
}(Fraction))
const FuelDeadFraction = /* #__PURE__ */(function (_Fraction7) {
  _inherits(FuelDeadFraction, _Fraction7)

  const _super39 = _createSuper(FuelDeadFraction)

  function FuelDeadFraction () {
    _classCallCheck(this, FuelDeadFraction)

    return _super39.apply(this, arguments)
  }

  return FuelDeadFraction
}(Fraction))
const FuelEffectiveHeatingNumber = /* #__PURE__ */(function (_Fraction8) {
  _inherits(FuelEffectiveHeatingNumber, _Fraction8)

  const _super40 = _createSuper(FuelEffectiveHeatingNumber)

  function FuelEffectiveHeatingNumber () {
    _classCallCheck(this, FuelEffectiveHeatingNumber)

    return _super40.apply(this, arguments)
  }

  return FuelEffectiveHeatingNumber
}(Fraction))
const FuelEffectiveMineralContent = /* #__PURE__ */(function (_Fraction9) {
  _inherits(FuelEffectiveMineralContent, _Fraction9)

  const _super41 = _createSuper(FuelEffectiveMineralContent)

  function FuelEffectiveMineralContent () {
    _classCallCheck(this, FuelEffectiveMineralContent)

    return _super41.apply(this, arguments)
  }

  return FuelEffectiveMineralContent
}(Fraction))
const FuelHeatOfCombustion = /* #__PURE__ */(function (_Quantity25) {
  _inherits(FuelHeatOfCombustion, _Quantity25)

  const _super42 = _createSuper(FuelHeatOfCombustion)

  function FuelHeatOfCombustion () {
    _classCallCheck(this, FuelHeatOfCombustion)

    return _super42.call(this, ['btu/lb', 'J/kg'], 8000, 12000)
  }

  return FuelHeatOfCombustion
}(Quantity))
const FuelHeatOfPreignition = /* #__PURE__ */(function (_Quantity26) {
  _inherits(FuelHeatOfPreignition, _Quantity26)

  const _super43 = _createSuper(FuelHeatOfPreignition)

  function FuelHeatOfPreignition () {
    _classCallCheck(this, FuelHeatOfPreignition)

    return _super43.call(this, ['btu/lb', 'J/kg'])
  }

  return FuelHeatOfPreignition
}(Quantity))
const FuelHeatSink = /* #__PURE__ */(function (_Quantity27) {
  _inherits(FuelHeatSink, _Quantity27)

  const _super44 = _createSuper(FuelHeatSink)

  function FuelHeatSink () {
    _classCallCheck(this, FuelHeatSink)

    return _super44.call(this, ['btu/ft3', 'J/m3'])
  }

  return FuelHeatSink
}(Quantity))
const FuelMoistureContent = /* #__PURE__ */(function (_Float3) {
  _inherits(FuelMoistureContent, _Float3)

  const _super46 = _createSuper(FuelMoistureContent)

  function FuelMoistureContent () {
    _classCallCheck(this, FuelMoistureContent)

    return _super46.call(this, 1, 0.01, 5)
  }

  return FuelMoistureContent
}(Float))
const FuelOvendryLoad = /* #__PURE__ */(function (_Quantity28) {
  _inherits(FuelOvendryLoad, _Quantity28)

  const _super47 = _createSuper(FuelOvendryLoad)

  function FuelOvendryLoad () {
    _classCallCheck(this, FuelOvendryLoad)

    return _super47.call(this, ['lb/ft2', 'ton/ac', 'kg/m2', 'T/ha'], 0, 10)
  }

  return FuelOvendryLoad
}(Quantity))
const FuelParticleFiberDensity = /* #__PURE__ */(function (_Quantity29) {
  _inherits(FuelParticleFiberDensity, _Quantity29)

  const _super48 = _createSuper(FuelParticleFiberDensity)

  function FuelParticleFiberDensity () {
    _classCallCheck(this, FuelParticleFiberDensity)

    return _super48.call(this, ['lb/ft3', 'kg/m3'])
  }

  return FuelParticleFiberDensity
}(Quantity))
const FuelSizeClassIndex = /* #__PURE__ */(function (_Index) {
  _inherits(FuelSizeClassIndex, _Index)

  const _super49 = _createSuper(FuelSizeClassIndex)

  function FuelSizeClassIndex () {
    _classCallCheck(this, FuelSizeClassIndex)

    return _super49.call(this, 6)
  }

  return FuelSizeClassIndex
}(Index))
const FuelSurfaceArea = /* #__PURE__ */(function (_Quantity30) {
  _inherits(FuelSurfaceArea, _Quantity30)

  const _super50 = _createSuper(FuelSurfaceArea)

  function FuelSurfaceArea () {
    _classCallCheck(this, FuelSurfaceArea)

    return _super50.call(this, ['ft2', 'm2'])
  }

  return FuelSurfaceArea
}(Quantity))
const FuelSurfaceAreaToVolumeRatio = /* #__PURE__ */(function (_Quantity31) {
  _inherits(FuelSurfaceAreaToVolumeRatio, _Quantity31)

  const _super51 = _createSuper(FuelSurfaceAreaToVolumeRatio)

  function FuelSurfaceAreaToVolumeRatio () {
    let _this

    _classCallCheck(this, FuelSurfaceAreaToVolumeRatio)

    _this = _super51.call(this, ['ft2/ft3', 'm2/m3', 'cm2/cm3'], 1)
    _this._specs._minimumValue = 1
    return _this
  }

  return FuelSurfaceAreaToVolumeRatio
}(Quantity))
const FuelTotalMineralContent = /* #__PURE__ */(function (_Fraction10) {
  _inherits(FuelTotalMineralContent, _Fraction10)

  const _super52 = _createSuper(FuelTotalMineralContent)

  function FuelTotalMineralContent () {
    _classCallCheck(this, FuelTotalMineralContent)

    return _super52.apply(this, arguments)
  }

  return FuelTotalMineralContent
}(Fraction))
const FuelVolume = /* #__PURE__ */(function (_Quantity32) {
  _inherits(FuelVolume, _Quantity32)

  const _super53 = _createSuper(FuelVolume)

  function FuelVolume () {
    _classCallCheck(this, FuelVolume)

    return _super53.call(this, ['ft3', 'm3'])
  }

  return FuelVolume
}(Quantity))
const IgnitionFuelDepth = /* #__PURE__ */(function (_Quantity33) {
  _inherits(IgnitionFuelDepth, _Quantity33)

  const _super54 = _createSuper(IgnitionFuelDepth)

  function IgnitionFuelDepth () {
    _classCallCheck(this, IgnitionFuelDepth)

    return _super54.call(this, ['in', 'cm'])
  }

  return IgnitionFuelDepth
}(Quantity))
const IgnitionProbability = /* #__PURE__ */(function (_Fraction11) {
  _inherits(IgnitionProbability, _Fraction11)

  const _super55 = _createSuper(IgnitionProbability)

  function IgnitionProbability () {
    _classCallCheck(this, IgnitionProbability)

    return _super55.apply(this, arguments)
  }

  return IgnitionProbability
}(Fraction))
const MapArea = /* #__PURE__ */(function (_Quantity34) {
  _inherits(MapArea, _Quantity34)

  const _super56 = _createSuper(MapArea)

  function MapArea () {
    _classCallCheck(this, MapArea)

    return _super56.call(this, ['in2', 'cm2', 'mm2'])
  }

  return MapArea
}(Quantity))
const MapContoursCount = /* #__PURE__ */(function (_Count) {
  _inherits(MapContoursCount, _Count)

  const _super57 = _createSuper(MapContoursCount)

  function MapContoursCount () {
    _classCallCheck(this, MapContoursCount)

    return _super57.call(this, 0)
  }

  return MapContoursCount
}(Count))
const MapDistance = /* #__PURE__ */(function (_Quantity35) {
  _inherits(MapDistance, _Quantity35)

  const _super58 = _createSuper(MapDistance)

  function MapDistance () {
    _classCallCheck(this, MapDistance)

    return _super58.call(this, ['in', 'ft', 'cm', 'mm'])
  }

  return MapDistance
}(Quantity))
const MapFactor = /* #__PURE__ */(function (_Float4) {
  _inherits(MapFactor, _Float4)

  const _super59 = _createSuper(MapFactor)

  function MapFactor () {
    _classCallCheck(this, MapFactor)

    return _super59.call(this, 1 / 24000, 1 / 2000000, 1)
  }

  return MapFactor
}(Float))
const MapScale = /* #__PURE__ */(function (_Float5) {
  _inherits(MapScale, _Float5)

  const _super60 = _createSuper(MapScale)

  function MapScale () {
    _classCallCheck(this, MapScale)

    return _super60.call(this, 24000, 1, 2000000)
  }

  return MapScale
}(Float))
const MortalityFraction = /* #__PURE__ */(function (_Fraction12) {
  _inherits(MortalityFraction, _Fraction12)

  const _super61 = _createSuper(MortalityFraction)

  function MortalityFraction () {
    _classCallCheck(this, MortalityFraction)

    return _super61.apply(this, arguments)
  }

  return MortalityFraction
}(Fraction))
const SlopeSteepness = /* #__PURE__ */(function (_Slope) {
  _inherits(SlopeSteepness, _Slope)

  const _super62 = _createSuper(SlopeSteepness)

  function SlopeSteepness () {
    _classCallCheck(this, SlopeSteepness)

    return _super62.apply(this, arguments)
  }

  return SlopeSteepness
}(Slope))
const SpottingFirebrandObject = /* #__PURE__ */(function (_Blob) {
  _inherits(SpottingFirebrandObject, _Blob)

  const _super63 = _createSuper(SpottingFirebrandObject)

  // Crown fire spotting distance
  function SpottingFirebrandObject () {
    _classCallCheck(this, SpottingFirebrandObject)

    return _super63.call(this, {
      zdrop: 0,
      xdrop: 0,
      xdrift: 0,
      xspot: 0,
      layer: 0
    })
  }

  return SpottingFirebrandObject
}(Blob))
const TreeBarkThickness = /* #__PURE__ */(function (_Quantity36) {
  _inherits(TreeBarkThickness, _Quantity36)

  const _super64 = _createSuper(TreeBarkThickness)

  function TreeBarkThickness () {
    _classCallCheck(this, TreeBarkThickness)

    return _super64.call(this, ['in', 'cm', 'mm'])
  }

  return TreeBarkThickness
}(Quantity))
const TreeCount = /* #__PURE__ */(function (_Count2) {
  _inherits(TreeCount, _Count2)

  const _super65 = _createSuper(TreeCount)

  function TreeCount () {
    _classCallCheck(this, TreeCount)

    return _super65.call(this, 0)
  }

  return TreeCount
}(Count))
const TreeDbh = /* #__PURE__ */(function (_Quantity37) {
  _inherits(TreeDbh, _Quantity37)

  const _super66 = _createSuper(TreeDbh)

  function TreeDbh () {
    _classCallCheck(this, TreeDbh)

    return _super66.call(this, ['in', 'ft', 'cm', 'm'])
  }

  return TreeDbh
}(Quantity))
const TreeHeight = /* #__PURE__ */(function (_Quantity38) {
  _inherits(TreeHeight, _Quantity38)

  const _super67 = _createSuper(TreeHeight)

  function TreeHeight () {
    _classCallCheck(this, TreeHeight)

    return _super67.call(this, ['ft', 'm'])
  }

  return TreeHeight
}(Quantity))
const WeightingFactor = /* #__PURE__ */(function (_Fraction13) {
  _inherits(WeightingFactor, _Fraction13)

  const _super68 = _createSuper(WeightingFactor)

  function WeightingFactor () {
    _classCallCheck(this, WeightingFactor)

    return _super68.apply(this, arguments)
  }

  return WeightingFactor
}(Fraction))
const WindSpeed = /* #__PURE__ */(function (_Quantity39) {
  _inherits(WindSpeed, _Quantity39)

  const _super69 = _createSuper(WindSpeed)

  function WindSpeed () {
    _classCallCheck(this, WindSpeed)

    return _super69.call(this, ['ft/min', 'mi/h', 'm/s', 'm/min', 'km/h'])
  }

  return WindSpeed
}(Quantity))
const WindSpeedAdjustmentFactor = /* #__PURE__ */(function (_Fraction14) {
  _inherits(WindSpeedAdjustmentFactor, _Fraction14)

  const _super70 = _createSuper(WindSpeedAdjustmentFactor)

  function WindSpeedAdjustmentFactor () {
    _classCallCheck(this, WindSpeedAdjustmentFactor)

    return _super70.apply(this, arguments)
  }

  return WindSpeedAdjustmentFactor
}(Fraction))

/* eslint-disable comma-spacing, indent, comma-dangle, quotes, no-unused-vars */
const sfe = 'surface.fire.ellipse'
const sfea = 'surface.fire.ellipse.axis'
const sfeb = 'surface.fire.ellipse.back'
const sfef = 'surface.fire.ellipse.flank'
const sfeh = 'surface.fire.ellipse.head'
const sfehdg = 'surface.fire.ellipse.heading'
const sfep = 'surface.fire.ellipse.psi'
const sfe5 = 'surface.fire.ellipse.beta5'
const sfe6 = 'surface.fire.ellipse.beta'
const sfem = 'surface.fire.ellipse.map'
const sfes = 'surface.fire.ellipse.size'
const sfev = 'surface.fire.ellipse.vector'
const spfb = 'surface.primary.fuel.bed'
const spfbd = 'surface.primary.fuel.bed.dead'
const spfbdpc = 'surface.primary.fuel.bed.dead.particle.class'
const spfbl = 'surface.primary.fuel.bed.live'
const spfblpc = 'surface.primary.fuel.bed.live.particle.class'
const spff = 'surface.primary.fuel.fire'
const spffs = 'surface.primary.fuel.fire.spread'
const spffss = 'surface.primary.fuel.fire.spread.step'
const spfm = 'surface.primary.fuel.model'
const spfmb = 'surface.primary.fuel.model.behave'
const spfmbd = 'surface.primary.fuel.model.behave.derived'
const spfmbp = 'surface.primary.fuel.model.behave.parms'
const spfmc = 'surface.primary.fuel.model.chaparral'
const spfmcd = 'surface.primary.fuel.model.chaparral.derived'
const spfmcp = 'surface.primary.fuel.model.chaparral.parms'
const spfmp = 'surface.primary.fuel.model.palmettoGallberry'
const spfmpd = 'surface.primary.fuel.model.palmettoGallberry.derived'
const spfmpp = 'surface.primary.fuel.model.palmettoGallberry.parms'
const spfmw = 'surface.primary.fuel.model.westernAspen'
const spfmwd = 'surface.primary.fuel.model.westernAspen.derived'
const spfmwp = 'surface.primary.fuel.model.westernAspen.parms'
const ssfb = 'surface.secondary.fuel.bed'
const ssfbd = 'surface.secondary.fuel.bed.dead'
const ssfbdpc = 'surface.secondary.fuel.bed.dead.particle.class'
const ssfbl = 'surface.secondary.fuel.bed.live'
const ssfblpc = 'surface.secondary.fuel.bed.live.particle.class'
const ssff = 'surface.secondary.fuel.fire'
const ssffs = 'surface.secondary.fuel.fire.spread'
const ssffss = 'surface.secondary.fuel.fire.spread.step'
const ssfm = 'surface.secondary.fuel.model'
const ssfmb = 'surface.secondary.fuel.model.behave'
const ssfmbd = 'surface.secondary.fuel.model.behave.derived'
const ssfmbp = 'surface.secondary.fuel.model.behave.parms'
const ssfmc = 'surface.secondary.fuel.model.chaparral'
const ssfmcd = 'surface.secondary.fuel.model.chaparral.derived'
const ssfmcp = 'surface.secondary.fuel.model.chaparral.parms'
const ssfmp = 'surface.secondary.fuel.model.palmettoGallberry'
const ssfmpd = 'surface.secondary.fuel.model.palmettoGallberry.derived'
const ssfmpp = 'surface.secondary.fuel.model.palmettoGallberry.parms'
const ssfmw = 'surface.secondary.fuel.model.westernAspen'
const ssfmwd = 'surface.secondary.fuel.model.westernAspen.derived'
const ssfmwp = 'surface.secondary.fuel.model.westernAspen.parms'
const swf = 'surface.weighted.fire'
const beta = 'packingRatio'
const ccfb = 'crown.canopy.fuel.bed'
const ccfbd = 'crown.canopy.fuel.bed.dead'
const ccfbdpc = 'crown.canopy.fuel.bed.dead.particle.class'
const ccfbl = 'crown.canopy.fuel.bed.live'
const ccfblpc = 'crown.canopy.fuel.bed.live.particle.class'
const ccff = 'crown.canopy.fuel.fire'
const ccffs = 'crown.canopy.fuel.fire.spread'
const ccffss = 'crown.canopy.fuel.fire.spread.step'
const cfa = 'crown.fire.active'
const cfam = 'crown.fire.active.map'
const cfas = 'crown.fire.active.size'
const cff = 'crown.fire.final'
const cffm = 'crown.fire.final.map'
const cffs = 'crown.fire.final.size'
const cfi = 'crown.fire.initiation'
const cfs = 'crown.fire.surface'
const cfg = 'configure'
const chf = 'cured.herb.fraction'
const cls = 'crownLengthScorched'
const cvs = 'crownVolumeScorched'
const dfl = 'deadFineLoad'
const dsl = 'deadSmallLoad'
const dml = 'deadMediumLoad'
const dll = 'deadLargeLoad'
const dfol = 'deadFoliageLoad'
const dlit = 'deadLitterLoad'
const dr = 'docs.run'
const ef = 'effectiveFuel'
const emc = 'effective.mineralContent'
const etam = 'moistureDamping'
const etas = 'mineralDamping'
const ew = 'effectiveWindSpeed'
const ext = 'extinction'
const fd = 'fiberDensity'
const fl = 'flameLength'
const fli = 'firelineIntensity'
const ft = 'spotDistance.flatTerrain'
const ftd = 'spotDistance.flatTerrainWithDrift'
const ig = 'ignition'
const mt = 'spotDistance.mountainTerrain'
const fbc = 'firebrand.criticalCoverHeight'
const fbd = 'firebrand.drift'
const fbh = 'firebrand.height'
const gamma = 'propagatingFluxRatio'
const hc = 'heatOfCombustion'
const hn = 'heatingNumber'
const hp = 'heatOfPreignition'
const hpa = 'heatPerUnitArea'
const hno = 'heading.fromNorth'
const hup = 'heading.fromUpslope'
const ils = 'ignition.lightningStrike'
const lfl = 'liveFineLoad'
const lsl = 'liveSmallLoad'
const lml = 'liveMediumLoad'
const lll = 'liveLargeLoad'
const lfol = 'liveFoliageLoad'
const lwr = 'lengthToWidthRatio'
const maxDir = 'maximumDirection'
const mc = 'moistureContent'
const md = 'mapDistance'
const nol = 'net.ovendryLoad'
const obs = 'observed'
const ol = 'ovendryLoad'
const phi = 'windSlopeSpreadRateCoefficient'
const phis = 'slope.phi'
const phiw = 'wind.phi'
const phiew = 'phiEffectiveWind'
const pr = 'probability'
const ros = 'spreadRate'
const rxi = 'reactionIntensity'
const rxv = 'reactionVelocity'
const sa = 'surfaceArea'
const savr = 'surfaceAreaToVolumeRatio'
const sc = 'sizeClass'
const sd = 'spreadDistance'
const sh = 'scorchHeight'
const spb = 'spotting.burningPile'
const spc = 'spotting.crownFire'
const sps = 'spotting.surfaceFire'
const spt = 'spotting.torchingTrees'
const taur$1 = 'flameResidenceTime'
const tm = 'treeMortality'
const tmc = 'total.mineralContent'
const vol = 'volume'
const waf = 'windSpeedAdjustmentFactor'
const wb = 'wind.factor.b'
const wc = 'wind.factor.c'
const we = 'wind.factor.e'
const wf = 'weightingFactor'
const wi = 'wind.factor.i'
const wk = 'wind.factor.k'
const wl = 'waterLoad'
const wsm = 'wind.speed.atMidflame'
const x = 'site'
const xc = 'site.canopy'
const xf = 'site.fire'
const xfo = 'site.fire.observed'
const xm = 'site.moisture'
const xs = 'site.slope'
const xt = 'site.temperature'
const xtrvd = 'site.terrain.ridgeValleyDistance'
const xtrve = 'site.terrain.ridgeValleyElevation'
const xtsrc = 'site.terrain.spotSourceLocation'
const xwd = 'site.wind.direction'
const xws = 'site.wind.speed'
const sm = 'site.map' // Array of literals used by Node updater config conditions and method parameters

const literal = [8000, // 0
'lengthToWidthRatio', // 1
'flameLength', // 2
'firelineIntensity', // 3
'headingFromUpslope', // 4
'upslope', // 5
'sourceFromNorth', // 6
'effectiveWindSpeed', // 7
1, // 8
'category', // 9
'liveCategory', // 10
'degrees', // 11
'map', // 12
0, // 13
'at10m', // 14
'at20ft', // 15
'atMidflame', // 16
32, // 17
46, // 18
30, // 19
8300, // 20
640, // 21
350, // 22
0.01, // 23
0.015, // 24
0.0555, // 25
0.055, // 26
0.03, // 27
'dead', // 28
109, // 29
127, // 30
140, // 31
5, // 32
61, // 33
2000, // 34
27, // 35
10500, // 36
2800, // 37
'live', // 38
9550, // 39
2200, // 40
0.035, // 41
0.3, // 42
0.4, // 43
0.25, // 44
'input', // 45
'applied', // 46
'catalog', // 47
'behave', // 48
'chaparral', // 49
'palmettoGallberry', // 50
'westernAspen', // 51
'none', // 52
'estimated', // 53
'chamise', // 54
'aspenShrub', // 55
'expected', // 56
'harmonic', // 57
'linkedToSurfaceFire', // 58
'fromHead', // 59
'fromUpslope', // 60
'fromNorth', // 61
'linkedToCrownFire', // 62
'standAlone', // 63
0.138, // 64
0.092, // 65
0.23, // 66
1500 // 67
] // Map of Dag method references

const dagMethod = new Map([['bind', bind], ['config', config], ['dangler', dangler], ['fixed', fixed], ['input', input], ['link', link], ['module', module]]) // Array of non-Dag Node updater method references

const method = [module, // 0
config, // 1
input, // 2
firebrand, // 3
lightningStrike, // 4
crownFill, // 5
crownLength, // 6
crownRatio, // 7
heatPerUnitArea, // 8
fixed, // 9
sheltersFuelFromWind, // 10
fuelLoad, // 11
windSpeedAdjustmentFactor, // 12
appliedDownWindCoverHeight, // 13
barkThickness, // 14
effectiveWindSpeedFromLwr, // 15
firelineIntensityFromFlameLength, // 16
flameLength, // 17
diff, // 18
sum$1, // 19
lengthToWidthRatio$1, // 20
divide, // 21
multiply, // 22
slopeRatioMap, // 23
slopeDegreesMap, // 24
bind, // 25
opposite, // 26
slopeDegrees, // 27
slopeRatio, // 28
fuelTemperature, // 29
speedAt10m, // 30
speedAt20ft, // 31
speedAt20ftFromMidflame, // 32
speedAtMidflame, // 33
selectByDomain, // 34
effectiveHeatingNumber, // 35
effectiveFuelLoad, // 36
heatOfPreignition, // 37
netOvendryLoad, // 38
sizeClass, // 39
sizeClassWeightingFactor, // 40
surfaceArea, // 41
surfaceAreaWeightingFactor, // 42
volume, // 43
effectiveFuelWaterLoad, // 44
sum, // 45
mineralDamping, // 46
moistureDamping, // 47
sumOfProducts, // 48
extinctionMoistureContentFactor, // 49
reactionIntensityDry, // 50
sizeClassWeightingFactorArray, // 51
extinctionMoistureContent, // 52
heatSink, // 53
noWindNoSlopeSpreadRate, // 54
openWindSpeedAdjustmentFactor, // 55
packingRatio, // 56
optimumPackingRatio, // 57
propagatingFluxRatio, // 58
reactionVelocityExponent, // 59
reactionVelocityMaximum, // 60
reactionVelocityOptimum, // 61
savr15, // 62
maximumDirectionSlopeSpreadRate, // 63
maximumDirectionWindSpreadRate, // 64
maximumDirectionXComponent, // 65
maximumDirectionYComponent, // 66
maximumDirectionSpreadRate, // 67
greaterThan, // 68
effectiveWindSpeedLimit, // 69
phiEwFromEws, // 70
maximumSpreadRate, // 71
slopeK, // 72
phiSlope, // 73
effectiveWindSpeed, // 74
phiEffectiveWind, // 75
phiEffectiveWindInferred, // 76
spreadRateWithCrossSlopeWind, // 77
Math.min, // 78
spreadRateWithRosLimitApplied, // 79
windSpeedAdjustmentFactor$1, // 80
windB, // 81
windC, // 82
windE, // 83
windK, // 84
windI, // 85
phiWind, // 86
firelineIntensity, // 87
taur, // 88
spreadDirectionFromUpslope, // 89
heatPerUnitArea$1, // 90
scorchHeight, // 91
domain, // 92
curedHerbFraction, // 93
behaveDepth, // 94
behaveDeadMext, // 95
behaveTotalHerbLoad, // 96
behaveDead1Load, // 97
behaveDead10Load, // 98
behaveDead100Load, // 99
behaveLiveStemLoad, // 100
behaveDead1Savr, // 101
behaveLiveHerbSavr, // 102
behaveLiveStemSavr, // 103
behaveDeadHeat, // 104
behaveLiveHeat, // 105
deadHerbLoad, // 106
liveHerbLoad, // 107
chaparralFuelType, // 108
chaparralDeadFraction, // 109
chaparralDepth, // 110
chaparralTotalLoad, // 111
age, // 112
deadFractionAverageMortality, // 113
deadFractionSevereMortality, // 114
fuelDepth, // 115
totalLoad, // 116
deadLoad, // 117
deadClass1Load, // 118
deadClass2Load, // 119
deadClass3Load, // 120
deadClass4Load, // 121
liveLoad, // 122
liveClass1Load, // 123
liveClass2Load, // 124
liveClass3Load, // 125
liveClass4Load, // 126
liveClass5Load, // 127
palmettoGallberryAge, // 128
palmettoGallberryBasalArea, // 129
palmettoGallberryCover, // 130
palmettoGallberryHeight, // 131
fuelDepth$1, // 132
deadFineLoad, // 133
deadSmallLoad, // 134
deadFoliageLoad, // 135
deadLitterLoad, // 136
liveFineLoad, // 137
liveSmallLoad, // 138
liveFoliageLoad, // 139
westernAspenFuelType, // 140
westernAspenCuringLevel, // 141
depth, // 142
deadFineLoad$1, // 143
deadSmallLoad$1, // 144
deadFineSavr, // 145
liveHerbLoad$1, // 146
liveStemLoad, // 147
liveStemSavr, // 148
Math.max, // 149
or, // 150
arithmeticMeanSpreadRate, // 151
expectedValueSpreadRateMOCK, // 152
harmonicMeanSpreadRate, // 153
eccentricity, // 154
majorSpreadRate, // 155
minorSpreadRate, // 156
fSpreadRate, // 157
gSpreadRate, // 158
hSpreadRate, // 159
area$1, // 160
spreadDistance, // 161
perimeter$1, // 162
mapArea, // 163
fliAtAzimuth, // 164
backingSpreadRate, // 165
mortalityRate, // 166
flankingSpreadRate, // 167
psiSpreadRate, // 168
betaSpreadRate, // 169
thetaFromBeta, // 170
psiFromTheta, // 171
criticalCoverHeight, // 172
burningPileFirebrandHeight, // 173
distanceFlatTerrain, // 174
distanceFlatTerrainWithDrift, // 175
distanceMountainTerrain, // 176
zdrop, // 177
xdrift, // 178
xdrop, // 179
xspot, // 180
firelineIntensityThomas, // 181
flatDistance, // 182
surfaceFireFirebrandHeight, // 183
surfaceFireFirebrandDrift, // 184
torchingTreesFirebrandHeight, // 185
torchingTreesSteadyFlameHeight, // 186
torchingTreesSteadyFlameDuration, // 187
crownLengthScorched, // 188
crownVolumeScorched, // 189
area, // 190
perimeter, // 191
lengthToWidthRatio, // 192
rActive, // 193
fliActive, // 194
flameLengthThomas, // 195
hpuaActive, // 196
powerOfTheFire, // 197
powerOfTheWind, // 198
isPlumeDominated, // 199
isWindDriven, // 200
rSa, // 201
crownFractionBurned, // 202
rFinal, // 203
fliFinal, // 204
fliInit, // 205
rInit, // 206
rPrimeActive, // 207
transitionRatio, // 208
canTransition, // 209
activeRatio, // 210
type, // 211
isActive, // 212
isCrown, // 213
isPassive, // 214
isConditional, // 215
isSurface, // 216
oActive, // 217
crowningIndex // 218
] // Array of Node Variant class (constructor) references

const variantClass = [ConfigModuleActive, // 0
ConfigLinkSurfaceFire, // 1
ConfigLinkCrownFire, // 2
ConfigLinkFireEllipse, // 3
ConfigLinkScorchHeight, // 4
ConfigPrimaryFuels, // 5
ConfigSecondaryFuels, // 6
ConfigMoistureContents, // 7
ConfigWindSpeedAdjustmentFactor, // 8
ConfigCuredHerbFraction, // 9
ConfigChaparralTotalLoad, // 10
ConfigSlopeSteepness, // 11
ConfigWindDirection, // 12
ConfigWindSpeed, // 13
ConfigFirelineIntensity, // 14
ConfigFireLengthToWidthRatio, // 15
ConfigEffectiveWindSpeedLimit, // 16
ConfigFireWeightingMethod, // 17
ConfigFireVector, // 18
Documentation, // 19
IgnitionProbability, // 20
IgnitionLightningChargeOption, // 21
IgnitionFuelDepth, // 22
IgnitionFuelTypeOption, // 23
FuelCoverFraction, // 24
TreeHeight, // 25
CrownFillFraction, // 26
CrownRatioFraction, // 27
FireHeatPerUnitArea, // 28
FuelBedBulkDensity, // 29
FuelMoistureContent, // 30
FuelHeatOfCombustion, // 31
Bool, // 32
FuelOvendryLoad, // 33
WindSpeedAdjustmentFactor, // 34
TreeBarkThickness, // 35
TreeDbh, // 36
TreeSpeciesFofem6Option, // 37
WindSpeed, // 38
FireFirelineIntensity, // 39
FireFlameLength, // 40
CompassAzimuth, // 41
FireLengthToWidthRatio, // 42
FireSpreadRate, // 43
FireScorchHeight, // 44
FireElapsedTime, // 45
MapScale, // 46
MapContoursCount, // 47
FireSpreadDistance, // 48
MapFactor, // 49
SlopeSteepness, // 50
AirTemperature, // 51
FuelParticleFiberDensity, // 52
FuelSurfaceAreaToVolumeRatio, // 53
FuelEffectiveMineralContent, // 54
FuelTotalMineralContent, // 55
FuelEffectiveHeatingNumber, // 56
FuelHeatOfPreignition, // 57
FuelSizeClassIndex, // 58
WeightingFactor, // 59
FuelSurfaceArea, // 60
FuelVolume, // 61
FireDampingCoefficient, // 62
Factor, // 63
FuelBedDepth, // 64
FireReactionIntensity, // 65
FuelBedHeatOfPreignition, // 66
FuelHeatSink, // 67
FuelBedPackingRatio, // 68
FirePropagatingFluxRatio, // 69
FireReactionVelocity, // 70
FireResidenceTime, // 71
FuelModelDomainOption, // 72
FuelModelKeyOption, // 73
FuelDeadFraction, // 74
ChaparralTypeOption, // 75
FuelAge, // 76
MortalityFraction, // 77
FuelBasalArea, // 78
WesternAspenTypeOption, // 79
FireArea, // 80
MapArea, // 81
MapDistance, // 82
SpottingSourceLocationOption, // 83
FireSpotDistance, // 84
SpottingFirebrandObject, // 85
TorchingTreeSpeciesOption, // 86
TreeCount, // 87
FireFlameDuration, // 88
FirePower, // 89
FirePowerRatio, // 90
CrownFireBurnedFraction, // 91
CrownTransitionRatio, // 92
CrownFireActiveRatio, // 93
CrownFireInitiationTypeOption // 94
] // Map of Node keys => indices

const map = new Map([["module.surfaceFire", 0], ["module.surfaceSpot", 1], ["module.crownFire", 2], ["module.crownSpot", 3], ["module.fireEllipse", 4], ["module.fireContain", 5], ["module.".concat(sh), 6], ["module.".concat(tm), 7], ["module.spotting", 8], ["module.".concat(ig, "Probability"), 9], ["link.crownFire", 10], ["link.crownSpot", 11], ["link.fireContain", 12], ["link.fireEllipse", 13], ["link.".concat(sh), 14], ["link.surfaceSpot", 15], ["link.".concat(tm), 16], ["".concat(cfg, ".fuel.primary"), 17], ["".concat(cfg, ".fuel.secondary"), 18], ["".concat(cfg, ".fuel.moisture"), 19], ["".concat(cfg, ".fuel.").concat(waf), 20], ["".concat(cfg, ".fuel.curedHerbFraction"), 21], ["".concat(cfg, ".fuel.chaparralTotalLoad"), 22], ["".concat(cfg, ".slope.steepness"), 23], ["".concat(cfg, ".wind.direction"), 24], ["".concat(cfg, ".wind.speed"), 25], ["".concat(cfg, ".fire.").concat(fli), 26], ["".concat(cfg, ".fire.").concat(lwr), 27], ["".concat(cfg, ".fire.").concat(ew, "Limit"), 28], ["".concat(cfg, ".fire.weightingMethod"), 29], ["".concat(cfg, ".fire.vector"), 30], ["".concat(dr, ".mainTitle"), 31], ["".concat(dr, ".subTitle"), 32], ["".concat(dr, ".description"), 33], ["".concat(dr, ".userName"), 34], ["".concat(ig, ".firebrand.").concat(pr), 35], ["".concat(ils, ".charge"), 36], ["".concat(ils, ".fuel.depth"), 37], ["".concat(ils, ".fuel.type"), 38], ["".concat(ils, ".").concat(pr), 39], ["".concat(xc, ".cover"), 40], ["".concat(xc, ".crown.baseHeight"), 41], ["".concat(xc, ".crown.fill"), 42], ["".concat(xc, ".crown.length"), 43], ["".concat(xc, ".crown.ratio"), 44], ["".concat(xc, ".crown.totalHeight"), 45], ["".concat(xc, ".fire.").concat(hpa), 46], ["".concat(xc, ".fuel.bulkDensity"), 47], ["".concat(xc, ".fuel.foliar.").concat(mc), 48], ["".concat(xc, ".fuel.").concat(hc), 49], ["".concat(xc, ".fuel.isSheltered"), 50], ["".concat(xc, ".fuel.").concat(ol), 51], ["".concat(xc, ".fuel.shading"), 52], ["".concat(xc, ".sheltered.").concat(waf), 53], ["".concat(xc, ".downwind.height"), 54], ["".concat(xc, ".downwind.isOpen"), 55], ["".concat(xc, ".downwind.appliedHeight"), 56], ["".concat(xc, ".tree.barkThickness"), 57], ["".concat(xc, ".tree.dbh"), 58], ["".concat(xc, ".tree.species.fofem6.code"), 59], ["".concat(xfo, ".").concat(ew), 60], ["".concat(xfo, ".").concat(fli), 61], ["".concat(xfo, ".").concat(fl), 62], ["".concat(xfo, ".").concat(hup), 63], ["".concat(xfo, ".").concat(hno), 64], ["".concat(xfo, ".").concat(hpa), 65], ["".concat(xfo, ".").concat(lwr), 66], ["".concat(xfo, ".").concat(ros), 67], ["".concat(xfo, ".").concat(sh), 68], ["".concat(xf, ".crown.").concat(fl), 69], ["".concat(xf, ".time.sinceIgnition"), 70], ["".concat(xf, ".vector.fromHead"), 71], ["".concat(xf, ".vector.fromNorth"), 72], ["".concat(xf, ".vector.fromUpslope"), 73], ["".concat(sm, ".scale"), 74], ["".concat(sm, ".contours"), 75], ["".concat(sm, ".distance"), 76], ["".concat(sm, ".factor"), 77], ["".concat(sm, ".interval"), 78], ["".concat(sm, ".reach"), 79], ["".concat(sm, ".rise"), 80], ["".concat(sm, ".slope.ratio"), 81], ["".concat(sm, ".slope.degrees"), 82], ["".concat(xm, ".dead.tl1h"), 83], ["".concat(xm, ".dead.tl10h"), 84], ["".concat(xm, ".dead.tl100h"), 85], ["".concat(xm, ".dead.category"), 86], ["".concat(xm, ".live.herb"), 87], ["".concat(xm, ".live.stem"), 88], ["".concat(xm, ".live.category"), 89], ["".concat(xs, ".direction.aspect"), 90], ["".concat(xs, ".direction.upslope"), 91], ["".concat(xs, ".steepness.degrees"), 92], ["".concat(xs, ".steepness.ratio"), 93], ["".concat(xt, ".air"), 94], ["".concat(xt, ".fuel"), 95], ["".concat(xwd, ".").concat(hup), 96], ["".concat(xwd, ".source.fromUpslope"), 97], ["".concat(xwd, ".source.fromNorth"), 98], ["".concat(xwd, ".").concat(hno), 99], ["".concat(xws, ".at10m"), 100], ["".concat(xws, ".at20ft"), 101], ["".concat(x, ".").concat(wsm), 102], ["".concat(x, ".").concat(waf), 103], ["".concat(spfbdpc, "1.").concat(fd), 104], ["".concat(spfbdpc, "1.").concat(hc), 105], ["".concat(spfbdpc, "1.").concat(ol), 106], ["".concat(spfbdpc, "1.").concat(mc), 107], ["".concat(spfbdpc, "1.").concat(savr), 108], ["".concat(spfbdpc, "1.").concat(emc), 109], ["".concat(spfbdpc, "1.").concat(tmc), 110], ["".concat(spfbdpc, "1.").concat(ef, ".").concat(hn), 111], ["".concat(spfbdpc, "1.").concat(ef, ".").concat(ol), 112], ["".concat(spfbdpc, "1.").concat(hp), 113], ["".concat(spfbdpc, "1.").concat(nol), 114], ["".concat(spfbdpc, "1.").concat(sc), 115], ["".concat(spfbdpc, "1.").concat(sc, ".").concat(wf), 116], ["".concat(spfbdpc, "1.").concat(sa), 117], ["".concat(spfbdpc, "1.").concat(sa, ".").concat(wf), 118], ["".concat(spfbdpc, "1.").concat(vol), 119], ["".concat(spfbdpc, "1.").concat(ef, ".").concat(wl), 120], ["".concat(spfbdpc, "2.").concat(fd), 121], ["".concat(spfbdpc, "2.").concat(hc), 122], ["".concat(spfbdpc, "2.").concat(ol), 123], ["".concat(spfbdpc, "2.").concat(mc), 124], ["".concat(spfbdpc, "2.").concat(savr), 125], ["".concat(spfbdpc, "2.").concat(emc), 126], ["".concat(spfbdpc, "2.").concat(tmc), 127], ["".concat(spfbdpc, "2.").concat(ef, ".").concat(hn), 128], ["".concat(spfbdpc, "2.").concat(ef, ".").concat(ol), 129], ["".concat(spfbdpc, "2.").concat(hp), 130], ["".concat(spfbdpc, "2.").concat(nol), 131], ["".concat(spfbdpc, "2.").concat(sc), 132], ["".concat(spfbdpc, "2.").concat(sc, ".").concat(wf), 133], ["".concat(spfbdpc, "2.").concat(sa), 134], ["".concat(spfbdpc, "2.").concat(sa, ".").concat(wf), 135], ["".concat(spfbdpc, "2.").concat(vol), 136], ["".concat(spfbdpc, "2.").concat(ef, ".").concat(wl), 137], ["".concat(spfbdpc, "3.").concat(fd), 138], ["".concat(spfbdpc, "3.").concat(hc), 139], ["".concat(spfbdpc, "3.").concat(ol), 140], ["".concat(spfbdpc, "3.").concat(mc), 141], ["".concat(spfbdpc, "3.").concat(savr), 142], ["".concat(spfbdpc, "3.").concat(emc), 143], ["".concat(spfbdpc, "3.").concat(tmc), 144], ["".concat(spfbdpc, "3.").concat(ef, ".").concat(hn), 145], ["".concat(spfbdpc, "3.").concat(ef, ".").concat(ol), 146], ["".concat(spfbdpc, "3.").concat(hp), 147], ["".concat(spfbdpc, "3.").concat(nol), 148], ["".concat(spfbdpc, "3.").concat(sc), 149], ["".concat(spfbdpc, "3.").concat(sc, ".").concat(wf), 150], ["".concat(spfbdpc, "3.").concat(sa), 151], ["".concat(spfbdpc, "3.").concat(sa, ".").concat(wf), 152], ["".concat(spfbdpc, "3.").concat(vol), 153], ["".concat(spfbdpc, "3.").concat(ef, ".").concat(wl), 154], ["".concat(spfbdpc, "4.").concat(fd), 155], ["".concat(spfbdpc, "4.").concat(hc), 156], ["".concat(spfbdpc, "4.").concat(ol), 157], ["".concat(spfbdpc, "4.").concat(mc), 158], ["".concat(spfbdpc, "4.").concat(savr), 159], ["".concat(spfbdpc, "4.").concat(emc), 160], ["".concat(spfbdpc, "4.").concat(tmc), 161], ["".concat(spfbdpc, "4.").concat(ef, ".").concat(hn), 162], ["".concat(spfbdpc, "4.").concat(ef, ".").concat(ol), 163], ["".concat(spfbdpc, "4.").concat(hp), 164], ["".concat(spfbdpc, "4.").concat(nol), 165], ["".concat(spfbdpc, "4.").concat(sc), 166], ["".concat(spfbdpc, "4.").concat(sc, ".").concat(wf), 167], ["".concat(spfbdpc, "4.").concat(sa), 168], ["".concat(spfbdpc, "4.").concat(sa, ".").concat(wf), 169], ["".concat(spfbdpc, "4.").concat(vol), 170], ["".concat(spfbdpc, "4.").concat(ef, ".").concat(wl), 171], ["".concat(spfbdpc, "5.").concat(fd), 172], ["".concat(spfbdpc, "5.").concat(hc), 173], ["".concat(spfbdpc, "5.").concat(ol), 174], ["".concat(spfbdpc, "5.").concat(mc), 175], ["".concat(spfbdpc, "5.").concat(savr), 176], ["".concat(spfbdpc, "5.").concat(emc), 177], ["".concat(spfbdpc, "5.").concat(tmc), 178], ["".concat(spfbdpc, "5.").concat(ef, ".").concat(hn), 179], ["".concat(spfbdpc, "5.").concat(ef, ".").concat(ol), 180], ["".concat(spfbdpc, "5.").concat(hp), 181], ["".concat(spfbdpc, "5.").concat(nol), 182], ["".concat(spfbdpc, "5.").concat(sc), 183], ["".concat(spfbdpc, "5.").concat(sc, ".").concat(wf), 184], ["".concat(spfbdpc, "5.").concat(sa), 185], ["".concat(spfbdpc, "5.").concat(sa, ".").concat(wf), 186], ["".concat(spfbdpc, "5.").concat(vol), 187], ["".concat(spfbdpc, "5.").concat(ef, ".").concat(wl), 188], ["".concat(spfblpc, "1.").concat(fd), 189], ["".concat(spfblpc, "1.").concat(hc), 190], ["".concat(spfblpc, "1.").concat(ol), 191], ["".concat(spfblpc, "1.").concat(mc), 192], ["".concat(spfblpc, "1.").concat(savr), 193], ["".concat(spfblpc, "1.").concat(emc), 194], ["".concat(spfblpc, "1.").concat(tmc), 195], ["".concat(spfblpc, "1.").concat(ef, ".").concat(hn), 196], ["".concat(spfblpc, "1.").concat(ef, ".").concat(ol), 197], ["".concat(spfblpc, "1.").concat(hp), 198], ["".concat(spfblpc, "1.").concat(nol), 199], ["".concat(spfblpc, "1.").concat(sc), 200], ["".concat(spfblpc, "1.").concat(sc, ".").concat(wf), 201], ["".concat(spfblpc, "1.").concat(sa), 202], ["".concat(spfblpc, "1.").concat(sa, ".").concat(wf), 203], ["".concat(spfblpc, "1.").concat(vol), 204], ["".concat(spfblpc, "2.").concat(fd), 205], ["".concat(spfblpc, "2.").concat(hc), 206], ["".concat(spfblpc, "2.").concat(ol), 207], ["".concat(spfblpc, "2.").concat(mc), 208], ["".concat(spfblpc, "2.").concat(savr), 209], ["".concat(spfblpc, "2.").concat(emc), 210], ["".concat(spfblpc, "2.").concat(tmc), 211], ["".concat(spfblpc, "2.").concat(ef, ".").concat(hn), 212], ["".concat(spfblpc, "2.").concat(ef, ".").concat(ol), 213], ["".concat(spfblpc, "2.").concat(hp), 214], ["".concat(spfblpc, "2.").concat(nol), 215], ["".concat(spfblpc, "2.").concat(sc), 216], ["".concat(spfblpc, "2.").concat(sc, ".").concat(wf), 217], ["".concat(spfblpc, "2.").concat(sa), 218], ["".concat(spfblpc, "2.").concat(sa, ".").concat(wf), 219], ["".concat(spfblpc, "2.").concat(vol), 220], ["".concat(spfblpc, "3.").concat(fd), 221], ["".concat(spfblpc, "3.").concat(hc), 222], ["".concat(spfblpc, "3.").concat(ol), 223], ["".concat(spfblpc, "3.").concat(mc), 224], ["".concat(spfblpc, "3.").concat(savr), 225], ["".concat(spfblpc, "3.").concat(emc), 226], ["".concat(spfblpc, "3.").concat(tmc), 227], ["".concat(spfblpc, "3.").concat(ef, ".").concat(hn), 228], ["".concat(spfblpc, "3.").concat(ef, ".").concat(ol), 229], ["".concat(spfblpc, "3.").concat(hp), 230], ["".concat(spfblpc, "3.").concat(nol), 231], ["".concat(spfblpc, "3.").concat(sc), 232], ["".concat(spfblpc, "3.").concat(sc, ".").concat(wf), 233], ["".concat(spfblpc, "3.").concat(sa), 234], ["".concat(spfblpc, "3.").concat(sa, ".").concat(wf), 235], ["".concat(spfblpc, "3.").concat(vol), 236], ["".concat(spfblpc, "4.").concat(fd), 237], ["".concat(spfblpc, "4.").concat(hc), 238], ["".concat(spfblpc, "4.").concat(ol), 239], ["".concat(spfblpc, "4.").concat(mc), 240], ["".concat(spfblpc, "4.").concat(savr), 241], ["".concat(spfblpc, "4.").concat(emc), 242], ["".concat(spfblpc, "4.").concat(tmc), 243], ["".concat(spfblpc, "4.").concat(ef, ".").concat(hn), 244], ["".concat(spfblpc, "4.").concat(ef, ".").concat(ol), 245], ["".concat(spfblpc, "4.").concat(hp), 246], ["".concat(spfblpc, "4.").concat(nol), 247], ["".concat(spfblpc, "4.").concat(sc), 248], ["".concat(spfblpc, "4.").concat(sc, ".").concat(wf), 249], ["".concat(spfblpc, "4.").concat(sa), 250], ["".concat(spfblpc, "4.").concat(sa, ".").concat(wf), 251], ["".concat(spfblpc, "4.").concat(vol), 252], ["".concat(spfblpc, "5.").concat(fd), 253], ["".concat(spfblpc, "5.").concat(hc), 254], ["".concat(spfblpc, "5.").concat(ol), 255], ["".concat(spfblpc, "5.").concat(mc), 256], ["".concat(spfblpc, "5.").concat(savr), 257], ["".concat(spfblpc, "5.").concat(emc), 258], ["".concat(spfblpc, "5.").concat(tmc), 259], ["".concat(spfblpc, "5.").concat(ef, ".").concat(hn), 260], ["".concat(spfblpc, "5.").concat(ef, ".").concat(ol), 261], ["".concat(spfblpc, "5.").concat(hp), 262], ["".concat(spfblpc, "5.").concat(nol), 263], ["".concat(spfblpc, "5.").concat(sc), 264], ["".concat(spfblpc, "5.").concat(sc, ".").concat(wf), 265], ["".concat(spfblpc, "5.").concat(sa), 266], ["".concat(spfblpc, "5.").concat(sa, ".").concat(wf), 267], ["".concat(spfblpc, "5.").concat(vol), 268], ["".concat(spfbd, ".").concat(sa), 269], ["".concat(spfbd, ".").concat(sa, ".").concat(wf), 270], ["".concat(spfbd, ".").concat(etas), 271], ["".concat(spfbd, ".").concat(etam), 272], ["".concat(spfbd, ".").concat(hc), 273], ["".concat(spfbd, ".").concat(ol), 274], ["".concat(spfbd, ".").concat(ef, ".").concat(ol), 275], ["".concat(spfbd, ".").concat(ext, ".").concat(mc), 276], ["".concat(spfbd, ".").concat(ext, ".").concat(mc, "Factor"), 277], ["".concat(spfbd, ".").concat(mc), 278], ["".concat(spfbd, ".").concat(vol), 279], ["".concat(spfbd, ".").concat(hp), 280], ["".concat(spfbd, ".").concat(rxi), 281], ["".concat(spfbd, ".").concat(rxi, "Dry"), 282], ["".concat(spfbd, ".").concat(savr), 283], ["".concat(spfbd, ".").concat(emc), 284], ["".concat(spfbd, ".").concat(sc, ".").concat(wf), 285], ["".concat(spfbd, ".").concat(nol), 286], ["".concat(spfbd, ".").concat(ef, ".").concat(wl), 287], ["".concat(spfbd, ".").concat(ef, ".").concat(mc), 288], ["".concat(spfbl, ".").concat(sa), 289], ["".concat(spfbl, ".").concat(sa, ".").concat(wf), 290], ["".concat(spfbl, ".").concat(etas), 291], ["".concat(spfbl, ".").concat(etam), 292], ["".concat(spfbl, ".").concat(hc), 293], ["".concat(spfbl, ".").concat(ol), 294], ["".concat(spfbl, ".").concat(ef, ".").concat(ol), 295], ["".concat(spfbl, ".").concat(ext, ".").concat(mc), 296], ["".concat(spfbl, ".").concat(ext, ".").concat(mc, "Factor"), 297], ["".concat(spfbl, ".").concat(mc), 298], ["".concat(spfbl, ".").concat(vol), 299], ["".concat(spfbl, ".").concat(hp), 300], ["".concat(spfbl, ".").concat(rxi), 301], ["".concat(spfbl, ".").concat(rxi, "Dry"), 302], ["".concat(spfbl, ".").concat(savr), 303], ["".concat(spfbl, ".").concat(emc), 304], ["".concat(spfbl, ".").concat(sc, ".").concat(wf), 305], ["".concat(spfbl, ".").concat(nol), 306], ["".concat(spfb, ".depth"), 307], ["".concat(spfb, ".bulkDensity"), 308], ["".concat(spfb, ".").concat(hp), 309], ["".concat(spfb, ".heatSink"), 310], ["".concat(spfb, ".noWindNoSlope.").concat(ros), 311], ["".concat(spfb, ".").concat(ol), 312], ["".concat(spfb, ".open.").concat(waf), 313], ["".concat(spfb, ".").concat(beta), 314], ["".concat(spfb, ".").concat(beta, ".optimum"), 315], ["".concat(spfb, ".").concat(beta, ".ratio"), 316], ["".concat(spfb, ".").concat(gamma), 317], ["".concat(spfb, ".").concat(rxi), 318], ["".concat(spfb, ".").concat(rxv, "Exponent"), 319], ["".concat(spfb, ".").concat(rxv, "Maximum"), 320], ["".concat(spfb, ".").concat(rxv, "Optimum"), 321], ["".concat(spfb, ".").concat(savr), 322], ["".concat(spfb, ".savr15"), 323], ["".concat(spfb, ".").concat(sa), 324], ["".concat(spff, ".").concat(maxDir, ".slope.").concat(ros), 325], ["".concat(spff, ".").concat(maxDir, ".wind.").concat(ros), 326], ["".concat(spff, ".wind.").concat(hup), 327], ["".concat(spff, ".").concat(maxDir, ".xComponent"), 328], ["".concat(spff, ".").concat(maxDir, ".yComponent"), 329], ["".concat(spff, ".").concat(maxDir, ".").concat(ros), 330], ["".concat(spff, ".limit.").concat(ew, ".exceeded"), 331], ["".concat(spff, ".limit.").concat(ros, ".exceeded"), 332], ["".concat(spff, ".limit.").concat(ew), 333], ["".concat(spff, ".limit.").concat(phi), 334], ["".concat(spff, ".limit.").concat(ros), 335], ["".concat(spff, ".slope.ratio"), 336], ["".concat(spff, ".slope.k"), 337], ["".concat(spff, ".").concat(phis), 338], ["".concat(spffss, "1.").concat(ew), 339], ["".concat(spffss, "1.").concat(phiew), 340], ["".concat(spffss, "1.").concat(ros), 341], ["".concat(spffss, "2.").concat(ew), 342], ["".concat(spffss, "2.").concat(phiew), 343], ["".concat(spffss, "2.").concat(ros), 344], ["".concat(spffss, "3a.").concat(ew), 345], ["".concat(spffss, "3a.").concat(phiew), 346], ["".concat(spffss, "3a.").concat(ros), 347], ["".concat(spffss, "3b.").concat(ew), 348], ["".concat(spffss, "3b.").concat(phiew), 349], ["".concat(spffss, "3b.").concat(ros), 350], ["".concat(spffss, "4.").concat(ew), 351], ["".concat(spffss, "4.").concat(phiew), 352], ["".concat(spffss, "4.").concat(ros), 353], ["".concat(spff, ".").concat(waf), 354], ["".concat(spff, ".").concat(wsm), 355], ["".concat(spff, ".").concat(wb), 356], ["".concat(spff, ".").concat(wc), 357], ["".concat(spff, ".").concat(we), 358], ["".concat(spff, ".").concat(wk), 359], ["".concat(spff, ".").concat(wi), 360], ["".concat(spff, ".").concat(phiw), 361], ["".concat(spff, ".").concat(ew), 362], ["".concat(spff, ".").concat(fli), 363], ["".concat(spff, ".").concat(fl), 364], ["".concat(spff, ".").concat(taur$1), 365], ["".concat(spff, ".").concat(hup), 366], ["".concat(spff, ".").concat(hno), 367], ["".concat(spff, ".").concat(hpa), 368], ["".concat(spff, ".").concat(lwr), 369], ["".concat(spff, ".").concat(phiew), 370], ["".concat(spff, ".").concat(rxi), 371], ["".concat(spff, ".").concat(sh), 372], ["".concat(spffs, "Rate"), 373], ["".concat(spff, ".noWindNoSlope.").concat(ros), 374], ["".concat(spfm, ".domain"), 375], ["".concat(spfm, ".catalogKey"), 376], ["".concat(spfmb, ".domain"), 377], ["".concat(spfmbp, ".").concat(chf), 378], ["".concat(spfmbp, ".depth"), 379], ["".concat(spfmbp, ".dead.").concat(ext, ".").concat(mc), 380], ["".concat(spfmbp, ".total.herb.").concat(ol), 381], ["".concat(spfmbp, ".dead.tl1h.").concat(ol), 382], ["".concat(spfmbp, ".dead.tl10h.").concat(ol), 383], ["".concat(spfmbp, ".dead.tl100h.").concat(ol), 384], ["".concat(spfmbp, ".live.stem.").concat(ol), 385], ["".concat(spfmbp, ".dead.tl1h.").concat(savr), 386], ["".concat(spfmbp, ".live.herb.").concat(savr), 387], ["".concat(spfmbp, ".live.stem.").concat(savr), 388], ["".concat(spfmbp, ".dead.").concat(hc), 389], ["".concat(spfmbp, ".live.").concat(hc), 390], ["".concat(spfmbd, ".dead.herb.").concat(ol), 391], ["".concat(spfmbd, ".live.herb.").concat(ol), 392], ["".concat(spfmc, ".domain"), 393], ["".concat(spfmcp, ".chaparralType"), 394], ["".concat(spfmcp, ".").concat(obs, ".deadFuelFraction"), 395], ["".concat(spfmcp, ".").concat(obs, ".depth"), 396], ["".concat(spfmcp, ".").concat(obs, ".totalLoad"), 397], ["".concat(spfmcp, ".applied.totalLoad"), 398], ["".concat(spfmcd, ".age"), 399], ["".concat(spfmcd, ".averageMortality"), 400], ["".concat(spfmcd, ".severeMortality"), 401], ["".concat(spfmcd, ".depth"), 402], ["".concat(spfmcd, ".totalLoad"), 403], ["".concat(spfmcd, ".deadLoad"), 404], ["".concat(spfmcd, ".").concat(dfl), 405], ["".concat(spfmcd, ".").concat(dsl), 406], ["".concat(spfmcd, ".").concat(dml), 407], ["".concat(spfmcd, ".").concat(dll), 408], ["".concat(spfmcd, ".liveLoad"), 409], ["".concat(spfmcd, ".").concat(lfl), 410], ["".concat(spfmcd, ".").concat(lsl), 411], ["".concat(spfmcd, ".").concat(lml), 412], ["".concat(spfmcd, ".").concat(lll), 413], ["".concat(spfmcd, ".liveLeafLoad"), 414], ["".concat(spfmp, ".domain"), 415], ["".concat(spfmpp, ".age"), 416], ["".concat(spfmpp, ".basalArea"), 417], ["".concat(spfmpp, ".cover"), 418], ["".concat(spfmpp, ".height"), 419], ["".concat(spfmpd, ".depth"), 420], ["".concat(spfmpd, ".").concat(dfl), 421], ["".concat(spfmpd, ".").concat(dsl), 422], ["".concat(spfmpd, ".").concat(dfol), 423], ["".concat(spfmpd, ".").concat(dlit), 424], ["".concat(spfmpd, ".").concat(lfl), 425], ["".concat(spfmpd, ".").concat(lsl), 426], ["".concat(spfmpd, ".").concat(lfol), 427], ["".concat(spfmw, ".domain"), 428], ["".concat(spfmwp, ".aspenType"), 429], ["".concat(spfmwp, ".curingLevel"), 430], ["".concat(spfmwd, ".depth"), 431], ["".concat(spfmwd, ".dead.fine.").concat(ol), 432], ["".concat(spfmwd, ".dead.small.").concat(ol), 433], ["".concat(spfmwd, ".dead.fine.").concat(savr), 434], ["".concat(spfmwd, ".live.herb.").concat(ol), 435], ["".concat(spfmwd, ".live.stem.").concat(ol), 436], ["".concat(spfmwd, ".live.stem.").concat(savr), 437], ["".concat(ssfbdpc, "1.").concat(fd), 438], ["".concat(ssfbdpc, "1.").concat(hc), 439], ["".concat(ssfbdpc, "1.").concat(ol), 440], ["".concat(ssfbdpc, "1.").concat(mc), 441], ["".concat(ssfbdpc, "1.").concat(savr), 442], ["".concat(ssfbdpc, "1.").concat(emc), 443], ["".concat(ssfbdpc, "1.").concat(tmc), 444], ["".concat(ssfbdpc, "1.").concat(ef, ".").concat(hn), 445], ["".concat(ssfbdpc, "1.").concat(ef, ".").concat(ol), 446], ["".concat(ssfbdpc, "1.").concat(hp), 447], ["".concat(ssfbdpc, "1.").concat(nol), 448], ["".concat(ssfbdpc, "1.").concat(sc), 449], ["".concat(ssfbdpc, "1.").concat(sc, ".").concat(wf), 450], ["".concat(ssfbdpc, "1.").concat(sa), 451], ["".concat(ssfbdpc, "1.").concat(sa, ".").concat(wf), 452], ["".concat(ssfbdpc, "1.").concat(vol), 453], ["".concat(ssfbdpc, "1.").concat(ef, ".").concat(wl), 454], ["".concat(ssfbdpc, "2.").concat(fd), 455], ["".concat(ssfbdpc, "2.").concat(hc), 456], ["".concat(ssfbdpc, "2.").concat(ol), 457], ["".concat(ssfbdpc, "2.").concat(mc), 458], ["".concat(ssfbdpc, "2.").concat(savr), 459], ["".concat(ssfbdpc, "2.").concat(emc), 460], ["".concat(ssfbdpc, "2.").concat(tmc), 461], ["".concat(ssfbdpc, "2.").concat(ef, ".").concat(hn), 462], ["".concat(ssfbdpc, "2.").concat(ef, ".").concat(ol), 463], ["".concat(ssfbdpc, "2.").concat(hp), 464], ["".concat(ssfbdpc, "2.").concat(nol), 465], ["".concat(ssfbdpc, "2.").concat(sc), 466], ["".concat(ssfbdpc, "2.").concat(sc, ".").concat(wf), 467], ["".concat(ssfbdpc, "2.").concat(sa), 468], ["".concat(ssfbdpc, "2.").concat(sa, ".").concat(wf), 469], ["".concat(ssfbdpc, "2.").concat(vol), 470], ["".concat(ssfbdpc, "2.").concat(ef, ".").concat(wl), 471], ["".concat(ssfbdpc, "3.").concat(fd), 472], ["".concat(ssfbdpc, "3.").concat(hc), 473], ["".concat(ssfbdpc, "3.").concat(ol), 474], ["".concat(ssfbdpc, "3.").concat(mc), 475], ["".concat(ssfbdpc, "3.").concat(savr), 476], ["".concat(ssfbdpc, "3.").concat(emc), 477], ["".concat(ssfbdpc, "3.").concat(tmc), 478], ["".concat(ssfbdpc, "3.").concat(ef, ".").concat(hn), 479], ["".concat(ssfbdpc, "3.").concat(ef, ".").concat(ol), 480], ["".concat(ssfbdpc, "3.").concat(hp), 481], ["".concat(ssfbdpc, "3.").concat(nol), 482], ["".concat(ssfbdpc, "3.").concat(sc), 483], ["".concat(ssfbdpc, "3.").concat(sc, ".").concat(wf), 484], ["".concat(ssfbdpc, "3.").concat(sa), 485], ["".concat(ssfbdpc, "3.").concat(sa, ".").concat(wf), 486], ["".concat(ssfbdpc, "3.").concat(vol), 487], ["".concat(ssfbdpc, "3.").concat(ef, ".").concat(wl), 488], ["".concat(ssfbdpc, "4.").concat(fd), 489], ["".concat(ssfbdpc, "4.").concat(hc), 490], ["".concat(ssfbdpc, "4.").concat(ol), 491], ["".concat(ssfbdpc, "4.").concat(mc), 492], ["".concat(ssfbdpc, "4.").concat(savr), 493], ["".concat(ssfbdpc, "4.").concat(emc), 494], ["".concat(ssfbdpc, "4.").concat(tmc), 495], ["".concat(ssfbdpc, "4.").concat(ef, ".").concat(hn), 496], ["".concat(ssfbdpc, "4.").concat(ef, ".").concat(ol), 497], ["".concat(ssfbdpc, "4.").concat(hp), 498], ["".concat(ssfbdpc, "4.").concat(nol), 499], ["".concat(ssfbdpc, "4.").concat(sc), 500], ["".concat(ssfbdpc, "4.").concat(sc, ".").concat(wf), 501], ["".concat(ssfbdpc, "4.").concat(sa), 502], ["".concat(ssfbdpc, "4.").concat(sa, ".").concat(wf), 503], ["".concat(ssfbdpc, "4.").concat(vol), 504], ["".concat(ssfbdpc, "4.").concat(ef, ".").concat(wl), 505], ["".concat(ssfbdpc, "5.").concat(fd), 506], ["".concat(ssfbdpc, "5.").concat(hc), 507], ["".concat(ssfbdpc, "5.").concat(ol), 508], ["".concat(ssfbdpc, "5.").concat(mc), 509], ["".concat(ssfbdpc, "5.").concat(savr), 510], ["".concat(ssfbdpc, "5.").concat(emc), 511], ["".concat(ssfbdpc, "5.").concat(tmc), 512], ["".concat(ssfbdpc, "5.").concat(ef, ".").concat(hn), 513], ["".concat(ssfbdpc, "5.").concat(ef, ".").concat(ol), 514], ["".concat(ssfbdpc, "5.").concat(hp), 515], ["".concat(ssfbdpc, "5.").concat(nol), 516], ["".concat(ssfbdpc, "5.").concat(sc), 517], ["".concat(ssfbdpc, "5.").concat(sc, ".").concat(wf), 518], ["".concat(ssfbdpc, "5.").concat(sa), 519], ["".concat(ssfbdpc, "5.").concat(sa, ".").concat(wf), 520], ["".concat(ssfbdpc, "5.").concat(vol), 521], ["".concat(ssfbdpc, "5.").concat(ef, ".").concat(wl), 522], ["".concat(ssfblpc, "1.").concat(fd), 523], ["".concat(ssfblpc, "1.").concat(hc), 524], ["".concat(ssfblpc, "1.").concat(ol), 525], ["".concat(ssfblpc, "1.").concat(mc), 526], ["".concat(ssfblpc, "1.").concat(savr), 527], ["".concat(ssfblpc, "1.").concat(emc), 528], ["".concat(ssfblpc, "1.").concat(tmc), 529], ["".concat(ssfblpc, "1.").concat(ef, ".").concat(hn), 530], ["".concat(ssfblpc, "1.").concat(ef, ".").concat(ol), 531], ["".concat(ssfblpc, "1.").concat(hp), 532], ["".concat(ssfblpc, "1.").concat(nol), 533], ["".concat(ssfblpc, "1.").concat(sc), 534], ["".concat(ssfblpc, "1.").concat(sc, ".").concat(wf), 535], ["".concat(ssfblpc, "1.").concat(sa), 536], ["".concat(ssfblpc, "1.").concat(sa, ".").concat(wf), 537], ["".concat(ssfblpc, "1.").concat(vol), 538], ["".concat(ssfblpc, "2.").concat(fd), 539], ["".concat(ssfblpc, "2.").concat(hc), 540], ["".concat(ssfblpc, "2.").concat(ol), 541], ["".concat(ssfblpc, "2.").concat(mc), 542], ["".concat(ssfblpc, "2.").concat(savr), 543], ["".concat(ssfblpc, "2.").concat(emc), 544], ["".concat(ssfblpc, "2.").concat(tmc), 545], ["".concat(ssfblpc, "2.").concat(ef, ".").concat(hn), 546], ["".concat(ssfblpc, "2.").concat(ef, ".").concat(ol), 547], ["".concat(ssfblpc, "2.").concat(hp), 548], ["".concat(ssfblpc, "2.").concat(nol), 549], ["".concat(ssfblpc, "2.").concat(sc), 550], ["".concat(ssfblpc, "2.").concat(sc, ".").concat(wf), 551], ["".concat(ssfblpc, "2.").concat(sa), 552], ["".concat(ssfblpc, "2.").concat(sa, ".").concat(wf), 553], ["".concat(ssfblpc, "2.").concat(vol), 554], ["".concat(ssfblpc, "3.").concat(fd), 555], ["".concat(ssfblpc, "3.").concat(hc), 556], ["".concat(ssfblpc, "3.").concat(ol), 557], ["".concat(ssfblpc, "3.").concat(mc), 558], ["".concat(ssfblpc, "3.").concat(savr), 559], ["".concat(ssfblpc, "3.").concat(emc), 560], ["".concat(ssfblpc, "3.").concat(tmc), 561], ["".concat(ssfblpc, "3.").concat(ef, ".").concat(hn), 562], ["".concat(ssfblpc, "3.").concat(ef, ".").concat(ol), 563], ["".concat(ssfblpc, "3.").concat(hp), 564], ["".concat(ssfblpc, "3.").concat(nol), 565], ["".concat(ssfblpc, "3.").concat(sc), 566], ["".concat(ssfblpc, "3.").concat(sc, ".").concat(wf), 567], ["".concat(ssfblpc, "3.").concat(sa), 568], ["".concat(ssfblpc, "3.").concat(sa, ".").concat(wf), 569], ["".concat(ssfblpc, "3.").concat(vol), 570], ["".concat(ssfblpc, "4.").concat(fd), 571], ["".concat(ssfblpc, "4.").concat(hc), 572], ["".concat(ssfblpc, "4.").concat(ol), 573], ["".concat(ssfblpc, "4.").concat(mc), 574], ["".concat(ssfblpc, "4.").concat(savr), 575], ["".concat(ssfblpc, "4.").concat(emc), 576], ["".concat(ssfblpc, "4.").concat(tmc), 577], ["".concat(ssfblpc, "4.").concat(ef, ".").concat(hn), 578], ["".concat(ssfblpc, "4.").concat(ef, ".").concat(ol), 579], ["".concat(ssfblpc, "4.").concat(hp), 580], ["".concat(ssfblpc, "4.").concat(nol), 581], ["".concat(ssfblpc, "4.").concat(sc), 582], ["".concat(ssfblpc, "4.").concat(sc, ".").concat(wf), 583], ["".concat(ssfblpc, "4.").concat(sa), 584], ["".concat(ssfblpc, "4.").concat(sa, ".").concat(wf), 585], ["".concat(ssfblpc, "4.").concat(vol), 586], ["".concat(ssfblpc, "5.").concat(fd), 587], ["".concat(ssfblpc, "5.").concat(hc), 588], ["".concat(ssfblpc, "5.").concat(ol), 589], ["".concat(ssfblpc, "5.").concat(mc), 590], ["".concat(ssfblpc, "5.").concat(savr), 591], ["".concat(ssfblpc, "5.").concat(emc), 592], ["".concat(ssfblpc, "5.").concat(tmc), 593], ["".concat(ssfblpc, "5.").concat(ef, ".").concat(hn), 594], ["".concat(ssfblpc, "5.").concat(ef, ".").concat(ol), 595], ["".concat(ssfblpc, "5.").concat(hp), 596], ["".concat(ssfblpc, "5.").concat(nol), 597], ["".concat(ssfblpc, "5.").concat(sc), 598], ["".concat(ssfblpc, "5.").concat(sc, ".").concat(wf), 599], ["".concat(ssfblpc, "5.").concat(sa), 600], ["".concat(ssfblpc, "5.").concat(sa, ".").concat(wf), 601], ["".concat(ssfblpc, "5.").concat(vol), 602], ["".concat(ssfbd, ".").concat(sa), 603], ["".concat(ssfbd, ".").concat(sa, ".").concat(wf), 604], ["".concat(ssfbd, ".").concat(etas), 605], ["".concat(ssfbd, ".").concat(etam), 606], ["".concat(ssfbd, ".").concat(hc), 607], ["".concat(ssfbd, ".").concat(ol), 608], ["".concat(ssfbd, ".").concat(ef, ".").concat(ol), 609], ["".concat(ssfbd, ".").concat(ext, ".").concat(mc), 610], ["".concat(ssfbd, ".").concat(ext, ".").concat(mc, "Factor"), 611], ["".concat(ssfbd, ".").concat(mc), 612], ["".concat(ssfbd, ".").concat(vol), 613], ["".concat(ssfbd, ".").concat(hp), 614], ["".concat(ssfbd, ".").concat(rxi), 615], ["".concat(ssfbd, ".").concat(rxi, "Dry"), 616], ["".concat(ssfbd, ".").concat(savr), 617], ["".concat(ssfbd, ".").concat(emc), 618], ["".concat(ssfbd, ".").concat(sc, ".").concat(wf), 619], ["".concat(ssfbd, ".").concat(nol), 620], ["".concat(ssfbd, ".").concat(ef, ".").concat(wl), 621], ["".concat(ssfbd, ".").concat(ef, ".").concat(mc), 622], ["".concat(ssfbl, ".").concat(sa), 623], ["".concat(ssfbl, ".").concat(sa, ".").concat(wf), 624], ["".concat(ssfbl, ".").concat(etas), 625], ["".concat(ssfbl, ".").concat(etam), 626], ["".concat(ssfbl, ".").concat(hc), 627], ["".concat(ssfbl, ".").concat(ol), 628], ["".concat(ssfbl, ".").concat(ef, ".").concat(ol), 629], ["".concat(ssfbl, ".").concat(ext, ".").concat(mc), 630], ["".concat(ssfbl, ".").concat(ext, ".").concat(mc, "Factor"), 631], ["".concat(ssfbl, ".").concat(mc), 632], ["".concat(ssfbl, ".").concat(vol), 633], ["".concat(ssfbl, ".").concat(hp), 634], ["".concat(ssfbl, ".").concat(rxi), 635], ["".concat(ssfbl, ".").concat(rxi, "Dry"), 636], ["".concat(ssfbl, ".").concat(savr), 637], ["".concat(ssfbl, ".").concat(emc), 638], ["".concat(ssfbl, ".").concat(sc, ".").concat(wf), 639], ["".concat(ssfbl, ".").concat(nol), 640], ["".concat(ssfb, ".depth"), 641], ["".concat(ssfb, ".bulkDensity"), 642], ["".concat(ssfb, ".").concat(hp), 643], ["".concat(ssfb, ".heatSink"), 644], ["".concat(ssfb, ".noWindNoSlope.").concat(ros), 645], ["".concat(ssfb, ".").concat(ol), 646], ["".concat(ssfb, ".open.").concat(waf), 647], ["".concat(ssfb, ".").concat(beta), 648], ["".concat(ssfb, ".").concat(beta, ".optimum"), 649], ["".concat(ssfb, ".").concat(beta, ".ratio"), 650], ["".concat(ssfb, ".").concat(gamma), 651], ["".concat(ssfb, ".").concat(rxi), 652], ["".concat(ssfb, ".").concat(rxv, "Exponent"), 653], ["".concat(ssfb, ".").concat(rxv, "Maximum"), 654], ["".concat(ssfb, ".").concat(rxv, "Optimum"), 655], ["".concat(ssfb, ".").concat(savr), 656], ["".concat(ssfb, ".savr15"), 657], ["".concat(ssfb, ".").concat(sa), 658], ["".concat(ssff, ".").concat(maxDir, ".slope.").concat(ros), 659], ["".concat(ssff, ".").concat(maxDir, ".wind.").concat(ros), 660], ["".concat(ssff, ".wind.").concat(hup), 661], ["".concat(ssff, ".").concat(maxDir, ".xComponent"), 662], ["".concat(ssff, ".").concat(maxDir, ".yComponent"), 663], ["".concat(ssff, ".").concat(maxDir, ".").concat(ros), 664], ["".concat(ssff, ".limit.").concat(ew, ".exceeded"), 665], ["".concat(ssff, ".limit.").concat(ros, ".exceeded"), 666], ["".concat(ssff, ".limit.").concat(ew), 667], ["".concat(ssff, ".limit.").concat(phi), 668], ["".concat(ssff, ".limit.").concat(ros), 669], ["".concat(ssff, ".slope.ratio"), 670], ["".concat(ssff, ".slope.k"), 671], ["".concat(ssff, ".").concat(phis), 672], ["".concat(ssffss, "1.").concat(ew), 673], ["".concat(ssffss, "1.").concat(phiew), 674], ["".concat(ssffss, "1.").concat(ros), 675], ["".concat(ssffss, "2.").concat(ew), 676], ["".concat(ssffss, "2.").concat(phiew), 677], ["".concat(ssffss, "2.").concat(ros), 678], ["".concat(ssffss, "3a.").concat(ew), 679], ["".concat(ssffss, "3a.").concat(phiew), 680], ["".concat(ssffss, "3a.").concat(ros), 681], ["".concat(ssffss, "3b.").concat(ew), 682], ["".concat(ssffss, "3b.").concat(phiew), 683], ["".concat(ssffss, "3b.").concat(ros), 684], ["".concat(ssffss, "4.").concat(ew), 685], ["".concat(ssffss, "4.").concat(phiew), 686], ["".concat(ssffss, "4.").concat(ros), 687], ["".concat(ssff, ".").concat(waf), 688], ["".concat(ssff, ".").concat(wsm), 689], ["".concat(ssff, ".").concat(wb), 690], ["".concat(ssff, ".").concat(wc), 691], ["".concat(ssff, ".").concat(we), 692], ["".concat(ssff, ".").concat(wk), 693], ["".concat(ssff, ".").concat(wi), 694], ["".concat(ssff, ".").concat(phiw), 695], ["".concat(ssff, ".").concat(ew), 696], ["".concat(ssff, ".").concat(fli), 697], ["".concat(ssff, ".").concat(fl), 698], ["".concat(ssff, ".").concat(taur$1), 699], ["".concat(ssff, ".").concat(hup), 700], ["".concat(ssff, ".").concat(hno), 701], ["".concat(ssff, ".").concat(hpa), 702], ["".concat(ssff, ".").concat(lwr), 703], ["".concat(ssff, ".").concat(phiew), 704], ["".concat(ssff, ".").concat(rxi), 705], ["".concat(ssff, ".").concat(sh), 706], ["".concat(ssffs, "Rate"), 707], ["".concat(ssff, ".noWindNoSlope.").concat(ros), 708], ["".concat(ssfm, ".domain"), 709], ["".concat(ssfm, ".catalogKey"), 710], ["".concat(ssfmb, ".domain"), 711], ["".concat(ssfmbp, ".").concat(chf), 712], ["".concat(ssfmbp, ".depth"), 713], ["".concat(ssfmbp, ".dead.").concat(ext, ".").concat(mc), 714], ["".concat(ssfmbp, ".total.herb.").concat(ol), 715], ["".concat(ssfmbp, ".dead.tl1h.").concat(ol), 716], ["".concat(ssfmbp, ".dead.tl10h.").concat(ol), 717], ["".concat(ssfmbp, ".dead.tl100h.").concat(ol), 718], ["".concat(ssfmbp, ".live.stem.").concat(ol), 719], ["".concat(ssfmbp, ".dead.tl1h.").concat(savr), 720], ["".concat(ssfmbp, ".live.herb.").concat(savr), 721], ["".concat(ssfmbp, ".live.stem.").concat(savr), 722], ["".concat(ssfmbp, ".dead.").concat(hc), 723], ["".concat(ssfmbp, ".live.").concat(hc), 724], ["".concat(ssfmbd, ".dead.herb.").concat(ol), 725], ["".concat(ssfmbd, ".live.herb.").concat(ol), 726], ["".concat(ssfmc, ".domain"), 727], ["".concat(ssfmcp, ".chaparralType"), 728], ["".concat(ssfmcp, ".").concat(obs, ".deadFuelFraction"), 729], ["".concat(ssfmcp, ".").concat(obs, ".depth"), 730], ["".concat(ssfmcp, ".").concat(obs, ".totalLoad"), 731], ["".concat(ssfmcp, ".applied.totalLoad"), 732], ["".concat(ssfmcd, ".age"), 733], ["".concat(ssfmcd, ".averageMortality"), 734], ["".concat(ssfmcd, ".severeMortality"), 735], ["".concat(ssfmcd, ".depth"), 736], ["".concat(ssfmcd, ".totalLoad"), 737], ["".concat(ssfmcd, ".deadLoad"), 738], ["".concat(ssfmcd, ".").concat(dfl), 739], ["".concat(ssfmcd, ".").concat(dsl), 740], ["".concat(ssfmcd, ".").concat(dml), 741], ["".concat(ssfmcd, ".").concat(dll), 742], ["".concat(ssfmcd, ".liveLoad"), 743], ["".concat(ssfmcd, ".").concat(lfl), 744], ["".concat(ssfmcd, ".").concat(lsl), 745], ["".concat(ssfmcd, ".").concat(lml), 746], ["".concat(ssfmcd, ".").concat(lll), 747], ["".concat(ssfmcd, ".liveLeafLoad"), 748], ["".concat(ssfmp, ".domain"), 749], ["".concat(ssfmpp, ".age"), 750], ["".concat(ssfmpp, ".basalArea"), 751], ["".concat(ssfmpp, ".cover"), 752], ["".concat(ssfmpp, ".height"), 753], ["".concat(ssfmpd, ".depth"), 754], ["".concat(ssfmpd, ".").concat(dfl), 755], ["".concat(ssfmpd, ".").concat(dsl), 756], ["".concat(ssfmpd, ".").concat(dfol), 757], ["".concat(ssfmpd, ".").concat(dlit), 758], ["".concat(ssfmpd, ".").concat(lfl), 759], ["".concat(ssfmpd, ".").concat(lsl), 760], ["".concat(ssfmpd, ".").concat(lfol), 761], ["".concat(ssfmw, ".domain"), 762], ["".concat(ssfmwp, ".aspenType"), 763], ["".concat(ssfmwp, ".curingLevel"), 764], ["".concat(ssfmwd, ".depth"), 765], ["".concat(ssfmwd, ".dead.fine.").concat(ol), 766], ["".concat(ssfmwd, ".dead.small.").concat(ol), 767], ["".concat(ssfmwd, ".dead.fine.").concat(savr), 768], ["".concat(ssfmwd, ".live.herb.").concat(ol), 769], ["".concat(ssfmwd, ".live.stem.").concat(ol), 770], ["".concat(ssfmwd, ".live.stem.").concat(savr), 771], ["".concat(swf, ".primaryCover"), 772], ["".concat(swf, ".").concat(ew), 773], ["".concat(swf, ".").concat(hup), 774], ["".concat(swf, ".").concat(hno), 775], ["".concat(swf, ".").concat(lwr), 776], ["".concat(swf, ".").concat(wsm), 777], ["".concat(swf, ".").concat(waf), 778], ["".concat(swf, ".").concat(fli), 779], ["".concat(swf, ".").concat(fl), 780], ["".concat(swf, ".").concat(hpa), 781], ["".concat(swf, ".").concat(rxi), 782], ["".concat(swf, ".").concat(sh), 783], ["".concat(swf, ".limit.").concat(ew, ".exceeded"), 784], ["".concat(swf, ".limit.").concat(ew), 785], ["".concat(swf, ".").concat(ros), 786], ["".concat(swf, ".arithmeticMean.").concat(ros), 787], ["".concat(swf, ".expectedValue.").concat(ros), 788], ["".concat(swf, ".harmonicMean.").concat(ros), 789], ["".concat(sfea, ".eccentricity"), 790], ["".concat(sfea, ".").concat(ew), 791], ["".concat(sfea, ".").concat(lwr), 792], ["".concat(sfea, ".major.").concat(ros), 793], ["".concat(sfea, ".minor.").concat(ros), 794], ["".concat(sfea, ".f.").concat(ros), 795], ["".concat(sfea, ".g.").concat(ros), 796], ["".concat(sfea, ".h.").concat(ros), 797], ["".concat(sfev, ".fromHead"), 798], ["".concat(sfev, ".fromNorth"), 799], ["".concat(sfev, ".fromUpslope"), 800], ["".concat(sfes, ".area"), 801], ["".concat(sfes, ".length"), 802], ["".concat(sfes, ".perimeter"), 803], ["".concat(sfes, ".width"), 804], ["".concat(sfem, ".area"), 805], ["".concat(sfem, ".length"), 806], ["".concat(sfem, ".perimeter"), 807], ["".concat(sfem, ".width"), 808], ["".concat(sfeb, ".").concat(sd), 809], ["".concat(sfeb, ".").concat(fli), 810], ["".concat(sfeb, ".").concat(fl), 811], ["".concat(sfeb, ".").concat(md), 812], ["".concat(sfeb, ".").concat(ros), 813], ["".concat(sfeb, ".").concat(sh), 814], ["".concat(sfeb, ".").concat(tm), 815], ["".concat(sfef, ".").concat(sd), 816], ["".concat(sfef, ".").concat(fli), 817], ["".concat(sfef, ".").concat(fl), 818], ["".concat(sfef, ".").concat(md), 819], ["".concat(sfef, ".").concat(ros), 820], ["".concat(sfef, ".").concat(sh), 821], ["".concat(sfef, ".").concat(tm), 822], ["".concat(sfeh, ".").concat(sd), 823], ["".concat(sfeh, ".").concat(fli), 824], ["".concat(sfeh, ".").concat(fl), 825], ["".concat(sfeh, ".").concat(md), 826], ["".concat(sfeh, ".").concat(ros), 827], ["".concat(sfeh, ".").concat(sh), 828], ["".concat(sfeh, ".").concat(tm), 829], ["".concat(sfep, ".").concat(sd), 830], ["".concat(sfep, ".").concat(fli), 831], ["".concat(sfep, ".").concat(fl), 832], ["".concat(sfep, ".").concat(md), 833], ["".concat(sfep, ".").concat(ros), 834], ["".concat(sfep, ".").concat(sh), 835], ["".concat(sfep, ".").concat(tm), 836], ["".concat(sfe5, ".").concat(sd), 837], ["".concat(sfe5, ".").concat(fli), 838], ["".concat(sfe5, ".").concat(fl), 839], ["".concat(sfe5, ".").concat(md), 840], ["".concat(sfe5, ".").concat(ros), 841], ["".concat(sfe5, ".").concat(sh), 842], ["".concat(sfe5, ".").concat(tm), 843], ["".concat(sfe6, ".").concat(sd), 844], ["".concat(sfe6, ".").concat(fli), 845], ["".concat(sfe6, ".").concat(fl), 846], ["".concat(sfe6, ".").concat(md), 847], ["".concat(sfe6, ".").concat(ros), 848], ["".concat(sfe6, ".").concat(sh), 849], ["".concat(sfe6, ".").concat(tm), 850], ["".concat(sfe6, ".theta"), 851], ["".concat(sfe6, ".psi"), 852], ["".concat(sfe6, ".psiSpreadRate"), 853], ["".concat(sfehdg, ".fromUpslope"), 854], ["".concat(sfehdg, ".fromNorth"), 855], ["".concat(sfe, ".").concat(wsm), 856], ["".concat(xtsrc), 857], ["".concat(xtrvd), 858], ["".concat(xtrve), 859], ["".concat(spb, ".").concat(fbc), 860], ["".concat(spb, ".").concat(fbh), 861], ["".concat(spb, ".").concat(fbd), 862], ["".concat(spb, ".").concat(ft), 863], ["".concat(spb, ".").concat(ftd), 864], ["".concat(spb, ".").concat(mt), 865], ["".concat(spb, ".flameHeight"), 866], ["".concat(spc, ".").concat(fbc), 867], ["".concat(spc, ".").concat(fbh), 868], ["".concat(spc, ".").concat(fbd), 869], ["".concat(spc, ".").concat(ft), 870], ["".concat(spc, ".").concat(ftd), 871], ["".concat(spc, ".").concat(mt), 872], ["".concat(spc, ".").concat(fli), 873], ["".concat(spc, ".firebrandObject"), 874], ["".concat(sps, ".").concat(fbc), 875], ["".concat(sps, ".").concat(fli), 876], ["".concat(sps, ".").concat(fbh), 877], ["".concat(sps, ".").concat(fbd), 878], ["".concat(sps, ".").concat(ft), 879], ["".concat(sps, ".").concat(ftd), 880], ["".concat(sps, ".").concat(mt), 881], ["".concat(spt, ".").concat(fbc), 882], ["".concat(spt, ".").concat(fbh), 883], ["".concat(spt, ".").concat(fbd), 884], ["".concat(spt, ".").concat(ft), 885], ["".concat(spt, ".").concat(ftd), 886], ["".concat(spt, ".").concat(mt), 887], ["".concat(spt, ".species"), 888], ["".concat(spt, ".height"), 889], ["".concat(spt, ".dbh"), 890], ["".concat(spt, ".count"), 891], ["".concat(spt, ".flameHeight"), 892], ["".concat(spt, ".flameDuration"), 893], ["scorch.height", 894], ["mortality.".concat(sh), 895], ["mortality.rate", 896], ["mortality.".concat(cls), 897], ["mortality.".concat(cvs), 898], ["".concat(ccfbdpc, "1.").concat(fd), 899], ["".concat(ccfbdpc, "1.").concat(hc), 900], ["".concat(ccfbdpc, "1.").concat(ol), 901], ["".concat(ccfbdpc, "1.").concat(mc), 902], ["".concat(ccfbdpc, "1.").concat(savr), 903], ["".concat(ccfbdpc, "1.").concat(emc), 904], ["".concat(ccfbdpc, "1.").concat(tmc), 905], ["".concat(ccfbdpc, "2.").concat(fd), 906], ["".concat(ccfbdpc, "2.").concat(hc), 907], ["".concat(ccfbdpc, "2.").concat(ol), 908], ["".concat(ccfbdpc, "2.").concat(mc), 909], ["".concat(ccfbdpc, "2.").concat(savr), 910], ["".concat(ccfbdpc, "2.").concat(emc), 911], ["".concat(ccfbdpc, "2.").concat(tmc), 912], ["".concat(ccfbdpc, "3.").concat(fd), 913], ["".concat(ccfbdpc, "3.").concat(hc), 914], ["".concat(ccfbdpc, "3.").concat(ol), 915], ["".concat(ccfbdpc, "3.").concat(mc), 916], ["".concat(ccfbdpc, "3.").concat(savr), 917], ["".concat(ccfbdpc, "3.").concat(emc), 918], ["".concat(ccfbdpc, "3.").concat(tmc), 919], ["".concat(ccfbdpc, "4.").concat(fd), 920], ["".concat(ccfbdpc, "4.").concat(hc), 921], ["".concat(ccfbdpc, "4.").concat(ol), 922], ["".concat(ccfbdpc, "4.").concat(mc), 923], ["".concat(ccfbdpc, "4.").concat(savr), 924], ["".concat(ccfbdpc, "4.").concat(emc), 925], ["".concat(ccfbdpc, "4.").concat(tmc), 926], ["".concat(ccfbdpc, "5.").concat(fd), 927], ["".concat(ccfbdpc, "5.").concat(hc), 928], ["".concat(ccfbdpc, "5.").concat(ol), 929], ["".concat(ccfbdpc, "5.").concat(mc), 930], ["".concat(ccfbdpc, "5.").concat(savr), 931], ["".concat(ccfbdpc, "5.").concat(emc), 932], ["".concat(ccfbdpc, "5.").concat(tmc), 933], ["".concat(ccfblpc, "1.").concat(fd), 934], ["".concat(ccfblpc, "1.").concat(hc), 935], ["".concat(ccfblpc, "1.").concat(ol), 936], ["".concat(ccfblpc, "1.").concat(mc), 937], ["".concat(ccfblpc, "1.").concat(savr), 938], ["".concat(ccfblpc, "1.").concat(emc), 939], ["".concat(ccfblpc, "1.").concat(tmc), 940], ["".concat(ccfblpc, "2.").concat(fd), 941], ["".concat(ccfblpc, "2.").concat(hc), 942], ["".concat(ccfblpc, "2.").concat(ol), 943], ["".concat(ccfblpc, "2.").concat(mc), 944], ["".concat(ccfblpc, "2.").concat(savr), 945], ["".concat(ccfblpc, "2.").concat(emc), 946], ["".concat(ccfblpc, "2.").concat(tmc), 947], ["".concat(ccfblpc, "3.").concat(fd), 948], ["".concat(ccfblpc, "3.").concat(hc), 949], ["".concat(ccfblpc, "3.").concat(ol), 950], ["".concat(ccfblpc, "3.").concat(mc), 951], ["".concat(ccfblpc, "3.").concat(savr), 952], ["".concat(ccfblpc, "3.").concat(emc), 953], ["".concat(ccfblpc, "3.").concat(tmc), 954], ["".concat(ccfblpc, "4.").concat(fd), 955], ["".concat(ccfblpc, "4.").concat(hc), 956], ["".concat(ccfblpc, "4.").concat(ol), 957], ["".concat(ccfblpc, "4.").concat(mc), 958], ["".concat(ccfblpc, "4.").concat(savr), 959], ["".concat(ccfblpc, "4.").concat(emc), 960], ["".concat(ccfblpc, "4.").concat(tmc), 961], ["".concat(ccfblpc, "5.").concat(fd), 962], ["".concat(ccfblpc, "5.").concat(hc), 963], ["".concat(ccfblpc, "5.").concat(ol), 964], ["".concat(ccfblpc, "5.").concat(mc), 965], ["".concat(ccfblpc, "5.").concat(savr), 966], ["".concat(ccfblpc, "5.").concat(emc), 967], ["".concat(ccfblpc, "5.").concat(tmc), 968], ["".concat(ccfbdpc, "1.").concat(ef, ".").concat(hn), 969], ["".concat(ccfbdpc, "1.").concat(ef, ".").concat(ol), 970], ["".concat(ccfbdpc, "1.").concat(hp), 971], ["".concat(ccfbdpc, "1.").concat(nol), 972], ["".concat(ccfbdpc, "1.").concat(sc), 973], ["".concat(ccfbdpc, "1.").concat(sc, ".").concat(wf), 974], ["".concat(ccfbdpc, "1.").concat(sa), 975], ["".concat(ccfbdpc, "1.").concat(sa, ".").concat(wf), 976], ["".concat(ccfbdpc, "1.").concat(vol), 977], ["".concat(ccfbdpc, "1.").concat(ef, ".").concat(wl), 978], ["".concat(ccfbdpc, "2.").concat(ef, ".").concat(hn), 979], ["".concat(ccfbdpc, "2.").concat(ef, ".").concat(ol), 980], ["".concat(ccfbdpc, "2.").concat(hp), 981], ["".concat(ccfbdpc, "2.").concat(nol), 982], ["".concat(ccfbdpc, "2.").concat(sc), 983], ["".concat(ccfbdpc, "2.").concat(sc, ".").concat(wf), 984], ["".concat(ccfbdpc, "2.").concat(sa), 985], ["".concat(ccfbdpc, "2.").concat(sa, ".").concat(wf), 986], ["".concat(ccfbdpc, "2.").concat(vol), 987], ["".concat(ccfbdpc, "2.").concat(ef, ".").concat(wl), 988], ["".concat(ccfbdpc, "3.").concat(ef, ".").concat(hn), 989], ["".concat(ccfbdpc, "3.").concat(ef, ".").concat(ol), 990], ["".concat(ccfbdpc, "3.").concat(hp), 991], ["".concat(ccfbdpc, "3.").concat(nol), 992], ["".concat(ccfbdpc, "3.").concat(sc), 993], ["".concat(ccfbdpc, "3.").concat(sc, ".").concat(wf), 994], ["".concat(ccfbdpc, "3.").concat(sa), 995], ["".concat(ccfbdpc, "3.").concat(sa, ".").concat(wf), 996], ["".concat(ccfbdpc, "3.").concat(vol), 997], ["".concat(ccfbdpc, "3.").concat(ef, ".").concat(wl), 998], ["".concat(ccfbdpc, "4.").concat(ef, ".").concat(hn), 999], ["".concat(ccfbdpc, "4.").concat(ef, ".").concat(ol), 1000], ["".concat(ccfbdpc, "4.").concat(hp), 1001], ["".concat(ccfbdpc, "4.").concat(nol), 1002], ["".concat(ccfbdpc, "4.").concat(sc), 1003], ["".concat(ccfbdpc, "4.").concat(sc, ".").concat(wf), 1004], ["".concat(ccfbdpc, "4.").concat(sa), 1005], ["".concat(ccfbdpc, "4.").concat(sa, ".").concat(wf), 1006], ["".concat(ccfbdpc, "4.").concat(vol), 1007], ["".concat(ccfbdpc, "4.").concat(ef, ".").concat(wl), 1008], ["".concat(ccfbdpc, "5.").concat(ef, ".").concat(hn), 1009], ["".concat(ccfbdpc, "5.").concat(ef, ".").concat(ol), 1010], ["".concat(ccfbdpc, "5.").concat(hp), 1011], ["".concat(ccfbdpc, "5.").concat(nol), 1012], ["".concat(ccfbdpc, "5.").concat(sc), 1013], ["".concat(ccfbdpc, "5.").concat(sc, ".").concat(wf), 1014], ["".concat(ccfbdpc, "5.").concat(sa), 1015], ["".concat(ccfbdpc, "5.").concat(sa, ".").concat(wf), 1016], ["".concat(ccfbdpc, "5.").concat(vol), 1017], ["".concat(ccfbdpc, "5.").concat(ef, ".").concat(wl), 1018], ["".concat(ccfblpc, "1.").concat(ef, ".").concat(hn), 1019], ["".concat(ccfblpc, "1.").concat(ef, ".").concat(ol), 1020], ["".concat(ccfblpc, "1.").concat(hp), 1021], ["".concat(ccfblpc, "1.").concat(nol), 1022], ["".concat(ccfblpc, "1.").concat(sc), 1023], ["".concat(ccfblpc, "1.").concat(sc, ".").concat(wf), 1024], ["".concat(ccfblpc, "1.").concat(sa), 1025], ["".concat(ccfblpc, "1.").concat(sa, ".").concat(wf), 1026], ["".concat(ccfblpc, "1.").concat(vol), 1027], ["".concat(ccfblpc, "2.").concat(ef, ".").concat(hn), 1028], ["".concat(ccfblpc, "2.").concat(ef, ".").concat(ol), 1029], ["".concat(ccfblpc, "2.").concat(hp), 1030], ["".concat(ccfblpc, "2.").concat(nol), 1031], ["".concat(ccfblpc, "2.").concat(sc), 1032], ["".concat(ccfblpc, "2.").concat(sc, ".").concat(wf), 1033], ["".concat(ccfblpc, "2.").concat(sa), 1034], ["".concat(ccfblpc, "2.").concat(sa, ".").concat(wf), 1035], ["".concat(ccfblpc, "2.").concat(vol), 1036], ["".concat(ccfblpc, "3.").concat(ef, ".").concat(hn), 1037], ["".concat(ccfblpc, "3.").concat(ef, ".").concat(ol), 1038], ["".concat(ccfblpc, "3.").concat(hp), 1039], ["".concat(ccfblpc, "3.").concat(nol), 1040], ["".concat(ccfblpc, "3.").concat(sc), 1041], ["".concat(ccfblpc, "3.").concat(sc, ".").concat(wf), 1042], ["".concat(ccfblpc, "3.").concat(sa), 1043], ["".concat(ccfblpc, "3.").concat(sa, ".").concat(wf), 1044], ["".concat(ccfblpc, "3.").concat(vol), 1045], ["".concat(ccfblpc, "4.").concat(ef, ".").concat(hn), 1046], ["".concat(ccfblpc, "4.").concat(ef, ".").concat(ol), 1047], ["".concat(ccfblpc, "4.").concat(hp), 1048], ["".concat(ccfblpc, "4.").concat(nol), 1049], ["".concat(ccfblpc, "4.").concat(sc), 1050], ["".concat(ccfblpc, "4.").concat(sc, ".").concat(wf), 1051], ["".concat(ccfblpc, "4.").concat(sa), 1052], ["".concat(ccfblpc, "4.").concat(sa, ".").concat(wf), 1053], ["".concat(ccfblpc, "4.").concat(vol), 1054], ["".concat(ccfblpc, "5.").concat(ef, ".").concat(hn), 1055], ["".concat(ccfblpc, "5.").concat(ef, ".").concat(ol), 1056], ["".concat(ccfblpc, "5.").concat(hp), 1057], ["".concat(ccfblpc, "5.").concat(nol), 1058], ["".concat(ccfblpc, "5.").concat(sc), 1059], ["".concat(ccfblpc, "5.").concat(sc, ".").concat(wf), 1060], ["".concat(ccfblpc, "5.").concat(sa), 1061], ["".concat(ccfblpc, "5.").concat(sa, ".").concat(wf), 1062], ["".concat(ccfblpc, "5.").concat(vol), 1063], ["".concat(ccfbd, ".").concat(sa), 1064], ["".concat(ccfbd, ".").concat(sa, ".").concat(wf), 1065], ["".concat(ccfbd, ".").concat(etas), 1066], ["".concat(ccfbd, ".").concat(etam), 1067], ["".concat(ccfbd, ".").concat(hc), 1068], ["".concat(ccfbd, ".").concat(ol), 1069], ["".concat(ccfbd, ".").concat(ef, ".").concat(ol), 1070], ["".concat(ccfbd, ".").concat(ext, ".").concat(mc), 1071], ["".concat(ccfbd, ".").concat(ext, ".").concat(mc, "Factor"), 1072], ["".concat(ccfbd, ".").concat(mc), 1073], ["".concat(ccfbd, ".").concat(vol), 1074], ["".concat(ccfbd, ".").concat(hp), 1075], ["".concat(ccfbd, ".").concat(rxi), 1076], ["".concat(ccfbd, ".").concat(rxi, "Dry"), 1077], ["".concat(ccfbd, ".").concat(savr), 1078], ["".concat(ccfbd, ".").concat(emc), 1079], ["".concat(ccfbd, ".").concat(sc, ".").concat(wf), 1080], ["".concat(ccfbd, ".").concat(nol), 1081], ["".concat(ccfbd, ".").concat(ef, ".").concat(wl), 1082], ["".concat(ccfbd, ".").concat(ef, ".").concat(mc), 1083], ["".concat(ccfbl, ".").concat(sa), 1084], ["".concat(ccfbl, ".").concat(sa, ".").concat(wf), 1085], ["".concat(ccfbl, ".").concat(etas), 1086], ["".concat(ccfbl, ".").concat(etam), 1087], ["".concat(ccfbl, ".").concat(hc), 1088], ["".concat(ccfbl, ".").concat(ol), 1089], ["".concat(ccfbl, ".").concat(ef, ".").concat(ol), 1090], ["".concat(ccfbl, ".").concat(ext, ".").concat(mc), 1091], ["".concat(ccfbl, ".").concat(ext, ".").concat(mc, "Factor"), 1092], ["".concat(ccfbl, ".").concat(mc), 1093], ["".concat(ccfbl, ".").concat(vol), 1094], ["".concat(ccfbl, ".").concat(hp), 1095], ["".concat(ccfbl, ".").concat(rxi), 1096], ["".concat(ccfbl, ".").concat(rxi, "Dry"), 1097], ["".concat(ccfbl, ".").concat(savr), 1098], ["".concat(ccfbl, ".").concat(emc), 1099], ["".concat(ccfbl, ".").concat(sc, ".").concat(wf), 1100], ["".concat(ccfbl, ".").concat(nol), 1101], ["".concat(ccfb, ".depth"), 1102], ["".concat(ccfb, ".bulkDensity"), 1103], ["".concat(ccfb, ".").concat(hp), 1104], ["".concat(ccfb, ".heatSink"), 1105], ["".concat(ccfb, ".noWindNoSlope.").concat(ros), 1106], ["".concat(ccfb, ".").concat(ol), 1107], ["".concat(ccfb, ".open.").concat(waf), 1108], ["".concat(ccfb, ".").concat(beta), 1109], ["".concat(ccfb, ".").concat(beta, ".optimum"), 1110], ["".concat(ccfb, ".").concat(beta, ".ratio"), 1111], ["".concat(ccfb, ".").concat(gamma), 1112], ["".concat(ccfb, ".").concat(rxi), 1113], ["".concat(ccfb, ".").concat(rxv, "Exponent"), 1114], ["".concat(ccfb, ".").concat(rxv, "Maximum"), 1115], ["".concat(ccfb, ".").concat(rxv, "Optimum"), 1116], ["".concat(ccfb, ".").concat(savr), 1117], ["".concat(ccfb, ".savr15"), 1118], ["".concat(ccfb, ".").concat(sa), 1119], ["".concat(ccff, ".").concat(maxDir, ".slope.").concat(ros), 1120], ["".concat(ccff, ".").concat(maxDir, ".wind.").concat(ros), 1121], ["".concat(ccff, ".wind.").concat(hup), 1122], ["".concat(ccff, ".").concat(maxDir, ".xComponent"), 1123], ["".concat(ccff, ".").concat(maxDir, ".yComponent"), 1124], ["".concat(ccff, ".").concat(maxDir, ".").concat(ros), 1125], ["".concat(ccff, ".limit.").concat(ew, ".exceeded"), 1126], ["".concat(ccff, ".limit.").concat(ros, ".exceeded"), 1127], ["".concat(ccff, ".limit.").concat(ew), 1128], ["".concat(ccff, ".limit.").concat(phi), 1129], ["".concat(ccff, ".limit.").concat(ros), 1130], ["".concat(ccff, ".slope.ratio"), 1131], ["".concat(ccff, ".slope.k"), 1132], ["".concat(ccff, ".").concat(phis), 1133], ["".concat(ccffss, "1.").concat(ew), 1134], ["".concat(ccffss, "1.").concat(phiew), 1135], ["".concat(ccffss, "1.").concat(ros), 1136], ["".concat(ccffss, "2.").concat(ew), 1137], ["".concat(ccffss, "2.").concat(phiew), 1138], ["".concat(ccffss, "2.").concat(ros), 1139], ["".concat(ccffss, "3a.").concat(ew), 1140], ["".concat(ccffss, "3a.").concat(phiew), 1141], ["".concat(ccffss, "3a.").concat(ros), 1142], ["".concat(ccffss, "3b.").concat(ew), 1143], ["".concat(ccffss, "3b.").concat(phiew), 1144], ["".concat(ccffss, "3b.").concat(ros), 1145], ["".concat(ccffss, "4.").concat(ew), 1146], ["".concat(ccffss, "4.").concat(phiew), 1147], ["".concat(ccffss, "4.").concat(ros), 1148], ["".concat(ccff, ".").concat(waf), 1149], ["".concat(ccff, ".").concat(wsm), 1150], ["".concat(ccff, ".").concat(wb), 1151], ["".concat(ccff, ".").concat(wc), 1152], ["".concat(ccff, ".").concat(we), 1153], ["".concat(ccff, ".").concat(wk), 1154], ["".concat(ccff, ".").concat(wi), 1155], ["".concat(ccff, ".").concat(phiw), 1156], ["".concat(ccff, ".").concat(ew), 1157], ["".concat(ccff, ".").concat(fli), 1158], ["".concat(ccff, ".").concat(fl), 1159], ["".concat(ccff, ".").concat(taur$1), 1160], ["".concat(ccff, ".").concat(hup), 1161], ["".concat(ccff, ".").concat(hno), 1162], ["".concat(ccff, ".").concat(hpa), 1163], ["".concat(ccff, ".").concat(lwr), 1164], ["".concat(ccff, ".").concat(phiew), 1165], ["".concat(ccff, ".").concat(rxi), 1166], ["".concat(ccff, ".").concat(sh), 1167], ["".concat(ccffs, "Rate"), 1168], ["".concat(ccff, ".noWindNoSlope.").concat(ros), 1169], ["".concat(cfas, ".area"), 1170], ["".concat(cfas, ".length"), 1171], ["".concat(cfas, ".perimeter"), 1172], ["".concat(cfas, ".width"), 1173], ["".concat(cfam, ".area"), 1174], ["".concat(cfam, ".length"), 1175], ["".concat(cfam, ".perimeter"), 1176], ["".concat(cfam, ".width"), 1177], ["".concat(cfa, ".").concat(lwr), 1178], ["".concat(cfa, ".").concat(ros), 1179], ["".concat(cfa, ".").concat(fli), 1180], ["".concat(cfa, ".").concat(fl), 1181], ["".concat(cfa, ".").concat(hpa), 1182], ["".concat(cfa, ".powerOfTheFire"), 1183], ["".concat(cfa, ".powerOfTheWind"), 1184], ["".concat(cfa, ".powerRatio"), 1185], ["".concat(cfa, ".isPlumeDominated"), 1186], ["".concat(cfa, ".isWindDriven"), 1187], ["".concat(cffs, ".area"), 1188], ["".concat(cffs, ".length"), 1189], ["".concat(cffs, ".perimeter"), 1190], ["".concat(cffs, ".width"), 1191], ["".concat(cffm, ".area"), 1192], ["".concat(cffm, ".length"), 1193], ["".concat(cffm, ".perimeter"), 1194], ["".concat(cffm, ".width"), 1195], ["".concat(cff, ".rSa"), 1196], ["".concat(cff, ".crownFractionBurned"), 1197], ["".concat(cff, ".").concat(ros), 1198], ["".concat(cff, ".").concat(fli), 1199], ["".concat(cff, ".").concat(fl), 1200], ["".concat(cfi, ".").concat(fli), 1201], ["".concat(cfi, ".").concat(fl), 1202], ["".concat(cfi, ".").concat(ros), 1203], ["".concat(cfi, ".rPrime"), 1204], ["".concat(cfi, ".transitionRatio"), 1205], ["".concat(cfi, ".canTransition"), 1206], ["".concat(cfi, ".activeRatio"), 1207], ["".concat(cfi, ".type"), 1208], ["".concat(cfi, ".isActiveCrownFire"), 1209], ["".concat(cfi, ".isCrownFire"), 1210], ["".concat(cfi, ".isPassiveCrownFire"), 1211], ["".concat(cfi, ".isConditionalCrownFire"), 1212], ["".concat(cfi, ".isSurfaceFire"), 1213], ["".concat(cfi, ".oActive"), 1214], ["".concat(cfi, ".crowningIndex"), 1215], ["".concat(cfs, ".").concat(fli), 1216], ["".concat(cfs, ".").concat(fl), 1217], ["".concat(cfs, ".").concat(hpa), 1218]]) // Array of Node keys

const key = Array.from(map.keys()) // Array of Node updater [[<condition>], [<method>, ...parms]]

const updater = [[[[], [0]]], // 0
[[[], [0]]], // 1
[[[], [0]]], // 2
[[[], [0]]], // 3
[[[], [0]]], // 4
[[[], [0]]], // 5
[[[], [0]]], // 6
[[[], [0]]], // 7
[[[], [0]]], // 8
[[[], [0]]], // 9
[[[], [1]]], // 10
[[[], [1]]], // 11
[[[], [1]]], // 12
[[[], [1]]], // 13
[[[], [1]]], // 14
[[[], [1]]], // 15
[[[], [1]]], // 16
[[[], [1]]], // 17
[[[], [1]]], // 18
[[[], [1]]], // 19
[[[], [1]]], // 20
[[[], [1]]], // 21
[[[], [1]]], // 22
[[[], [1]]], // 23
[[[], [1]]], // 24
[[[], [1]]], // 25
[[[], [1]]], // 26
[[[], [1]]], // 27
[[[], [1]]], // 28
[[[], [1]]], // 29
[[[], [1]]], // 30
[[[], [2]]], // 31
[[[], [2]]], // 32
[[[], [2]]], // 33
[[[], [2]]], // 34
[[[], [3, [0, 95], [0, 83]]]], // 35
[[[], [2]]], // 36
[[[], [2]]], // 37
[[[], [2]]], // 38
[[[], [4, [0, 38], [0, 37], [0, 85], [0, 36]]]], // 39
[[[], [2]]], // 40
[[[], [2]]], // 41
[[[], [5, [0, 40], [0, 44]]]], // 42
[[[], [6, [0, 41], [0, 45]]]], // 43
[[[], [7, [0, 43], [0, 45]]]], // 44
[[[], [2]]], // 45
[[[], [8, [0, 51], [0, 49]]]], // 46
[[[], [2]]], // 47
[[[], [2]]], // 48
[[[], [9, [1, 0]]]], // 49
[[[], [10, [0, 40], [0, 45], [0, 42]]]], // 50
[[[], [11, [0, 47], [0, 43]]]], // 51
[[[], [2]]], // 52
[[[], [12, [0, 40], [0, 45], [0, 42]]]], // 53
[[[], [2]]], // 54
[[[], [2]]], // 55
[[[], [13, [0, 54], [0, 55]]]], // 56
[[[], [14, [0, 59], [0, 58]]]], // 57
[[[], [2]]], // 58
[[[], [2]]], // 59
[[[27, 1], [15, [0, 66]]], [[], [2]]], // 60
[[[26, 2], [16, [0, 62]]], [[], [2]]], // 61
[[[26, 3], [17, [0, 61]]], [[], [2]]], // 62
[[[24, 4], [2]], [[24, 5], [2]], [[], [18, [0, 64], [0, 91]]]], // 63
[[[24, 6], [2]], [[], [19, [0, 91], [0, 63]]]], // 64
[[[], [2]]], // 65
[[[27, 7], [20, [0, 60]]], [[], [2]]], // 66
[[[], [2]]], // 67
[[[], [2]]], // 68
[[[], [2]]], // 69
[[[], [2]]], // 70
[[[], [2]]], // 71
[[[], [2]]], // 72
[[[], [2]]], // 73
[[[], [2]]], // 74
[[[], [2]]], // 75
[[[], [2]]], // 76
[[[], [21, [1, 8], [0, 74]]]], // 77
[[[], [2]]], // 78
[[[], [22, [0, 74], [0, 76]]]], // 79
[[[], [22, [0, 78], [0, 75]]]], // 80
[[[], [23, [0, 74], [0, 78], [0, 75], [0, 76]]]], // 81
[[[], [24, [0, 74], [0, 78], [0, 75], [0, 76]]]], // 82
[[[19, 9], [25, [0, 86]]], [[], [2]]], // 83
[[[19, 9], [25, [0, 86]]], [[], [2]]], // 84
[[[19, 9], [25, [0, 86]]], [[], [2]]], // 85
[[[], [2]]], // 86
[[[19, 9], [25, [0, 89]]], [[19, 10], [25, [0, 89]]], [[], [2]]], // 87
[[[19, 9], [25, [0, 89]]], [[19, 10], [25, [0, 89]]], [[], [2]]], // 88
[[[], [2]]], // 89
[[[], [2]]], // 90
[[[], [26, [0, 90]]]], // 91
[[[23, 11], [2]], [[23, 12], [25, [0, 82]]], [[], [27, [0, 93]]]], // 92
[[[23, 11], [28, [0, 92]]], [[23, 12], [25, [0, 81]]], [[], [2]]], // 93
[[[], [2]]], // 94
[[[], [29, [0, 94], [0, 52]]]], // 95
[[[24, 4], [2]], [[24, 6], [18, [0, 99], [0, 91]]], [[24, 5], [9, [1, 13]]], [[], [9, [1, 13]]]], // 96
[[[], [26, [0, 96]]]], // 97
[[[24, 4], [26, [0, 99]]], [[24, 6], [2]], [[24, 5], [26, [0, 91]]], [[], [26, [0, 91]]]], // 98
[[[24, 4], [19, [0, 96], [0, 91]]], [[24, 6], [26, [0, 98]]], [[24, 5], [25, [0, 91]]], [[], [25, [0, 91]]]], // 99
[[[25, 14], [2]], [[], [30, [0, 101]]]], // 100
[[[25, 15], [2]], [[25, 14], [31, [0, 100]]], [[], [32, [0, 102], [0, 103]]]], // 101
[[[25, 16], [2]], [[], [33, [0, 101], [0, 103]]]], // 102
[[[], [2]]], // 103
[[[], [34, [0, 375], [1, 17], [1, 18], [1, 19], [1, 17]]]], // 104
[[[], [34, [0, 375], [0, 389], [1, 0], [1, 20], [1, 0]]]], // 105
[[[], [34, [0, 375], [0, 382], [0, 405], [0, 421], [0, 432]]]], // 106
[[[], [34, [0, 375], [0, 83], [0, 83], [0, 83], [0, 83]]]], // 107
[[[], [34, [0, 375], [0, 386], [1, 21], [1, 22], [0, 434]]]], // 108
[[[], [34, [0, 375], [1, 23], [1, 24], [1, 23], [1, 23]]]], // 109
[[[], [34, [0, 375], [1, 25], [1, 26], [1, 27], [1, 26]]]], // 110
[[[], [35, [0, 108]]]], // 111
[[[], [36, [0, 108], [0, 106], [1, 28]]]], // 112
[[[], [37, [0, 107], [0, 111]]]], // 113
[[[], [38, [0, 106], [0, 110]]]], // 114
[[[], [39, [0, 108]]]], // 115
[[[], [40, [0, 115], [0, 285]]]], // 116
[[[], [41, [0, 106], [0, 108], [0, 104]]]], // 117
[[[], [42, [0, 117], [0, 269]]]], // 118
[[[], [43, [0, 106], [0, 104]]]], // 119
[[[], [44, [0, 112], [0, 107]]]], // 120
[[[], [34, [0, 375], [1, 17], [1, 18], [1, 19], [1, 17]]]], // 121
[[[], [34, [0, 375], [0, 389], [1, 0], [1, 20], [1, 0]]]], // 122
[[[], [34, [0, 375], [0, 383], [0, 406], [0, 422], [0, 433]]]], // 123
[[[], [34, [0, 375], [0, 84], [0, 84], [0, 84], [0, 84]]]], // 124
[[[], [34, [0, 375], [1, 29], [1, 30], [1, 31], [1, 29]]]], // 125
[[[], [34, [0, 375], [1, 23], [1, 24], [1, 23], [1, 23]]]], // 126
[[[], [34, [0, 375], [1, 25], [1, 26], [1, 27], [1, 26]]]], // 127
[[[], [35, [0, 125]]]], // 128
[[[], [36, [0, 125], [0, 123], [1, 28]]]], // 129
[[[], [37, [0, 124], [0, 128]]]], // 130
[[[], [38, [0, 123], [0, 127]]]], // 131
[[[], [39, [0, 125]]]], // 132
[[[], [40, [0, 132], [0, 285]]]], // 133
[[[], [41, [0, 123], [0, 125], [0, 121]]]], // 134
[[[], [42, [0, 134], [0, 269]]]], // 135
[[[], [43, [0, 123], [0, 121]]]], // 136
[[[], [44, [0, 129], [0, 124]]]], // 137
[[[], [34, [0, 375], [1, 17], [1, 18], [1, 19], [1, 17]]]], // 138
[[[], [34, [0, 375], [0, 389], [1, 0], [1, 20], [1, 0]]]], // 139
[[[], [34, [0, 375], [0, 384], [0, 407], [0, 423], [1, 13]]]], // 140
[[[], [34, [0, 375], [0, 85], [0, 84], [0, 83], [1, 32]]]], // 141
[[[], [34, [0, 375], [1, 19], [1, 33], [1, 34], [1, 8]]]], // 142
[[[], [34, [0, 375], [1, 23], [1, 24], [1, 23], [1, 23]]]], // 143
[[[], [34, [0, 375], [1, 25], [1, 26], [1, 27], [1, 26]]]], // 144
[[[], [35, [0, 142]]]], // 145
[[[], [36, [0, 142], [0, 140], [1, 28]]]], // 146
[[[], [37, [0, 141], [0, 145]]]], // 147
[[[], [38, [0, 140], [0, 144]]]], // 148
[[[], [39, [0, 142]]]], // 149
[[[], [40, [0, 149], [0, 285]]]], // 150
[[[], [41, [0, 140], [0, 142], [0, 138]]]], // 151
[[[], [42, [0, 151], [0, 269]]]], // 152
[[[], [43, [0, 140], [0, 138]]]], // 153
[[[], [44, [0, 146], [0, 141]]]], // 154
[[[], [34, [0, 375], [1, 17], [1, 18], [1, 19], [1, 17]]]], // 155
[[[], [34, [0, 375], [0, 389], [1, 0], [1, 20], [1, 0]]]], // 156
[[[], [34, [0, 375], [0, 391], [0, 408], [0, 424], [1, 13]]]], // 157
[[[], [34, [0, 375], [0, 83], [0, 85], [0, 85], [1, 32]]]], // 158
[[[], [34, [0, 375], [0, 387], [1, 35], [1, 34], [1, 8]]]], // 159
[[[], [34, [0, 375], [1, 23], [1, 24], [1, 23], [1, 23]]]], // 160
[[[], [34, [0, 375], [1, 25], [1, 26], [1, 27], [1, 26]]]], // 161
[[[], [35, [0, 159]]]], // 162
[[[], [36, [0, 159], [0, 157], [1, 28]]]], // 163
[[[], [37, [0, 158], [0, 162]]]], // 164
[[[], [38, [0, 157], [0, 161]]]], // 165
[[[], [39, [0, 159]]]], // 166
[[[], [40, [0, 166], [0, 285]]]], // 167
[[[], [41, [0, 157], [0, 159], [0, 155]]]], // 168
[[[], [42, [0, 168], [0, 269]]]], // 169
[[[], [43, [0, 157], [0, 155]]]], // 170
[[[], [44, [0, 163], [0, 158]]]], // 171
[[[], [9, [1, 17]]]], // 172
[[[], [9, [1, 0]]]], // 173
[[[], [9, [1, 13]]]], // 174
[[[], [9, [1, 32]]]], // 175
[[[], [9, [1, 8]]]], // 176
[[[], [9, [1, 23]]]], // 177
[[[], [9, [1, 25]]]], // 178
[[[], [35, [0, 176]]]], // 179
[[[], [36, [0, 176], [0, 174], [1, 28]]]], // 180
[[[], [37, [0, 175], [0, 179]]]], // 181
[[[], [38, [0, 174], [0, 178]]]], // 182
[[[], [39, [0, 176]]]], // 183
[[[], [40, [0, 183], [0, 285]]]], // 184
[[[], [41, [0, 174], [0, 176], [0, 172]]]], // 185
[[[], [42, [0, 185], [0, 269]]]], // 186
[[[], [43, [0, 174], [0, 172]]]], // 187
[[[], [44, [0, 180], [0, 175]]]], // 188
[[[], [34, [0, 375], [1, 17], [1, 18], [1, 18], [1, 17]]]], // 189
[[[], [34, [0, 375], [0, 390], [1, 36], [1, 20], [1, 0]]]], // 190
[[[], [34, [0, 375], [0, 392], [0, 410], [0, 425], [0, 435]]]], // 191
[[[], [34, [0, 375], [0, 87], [0, 88], [0, 88], [0, 87]]]], // 192
[[[], [34, [0, 375], [0, 387], [1, 21], [1, 22], [1, 37]]]], // 193
[[[], [34, [0, 375], [1, 23], [1, 24], [1, 24], [1, 23]]]], // 194
[[[], [34, [0, 375], [1, 25], [1, 26], [1, 27], [1, 26]]]], // 195
[[[], [35, [0, 193]]]], // 196
[[[], [36, [0, 193], [0, 191], [1, 38]]]], // 197
[[[], [37, [0, 192], [0, 196]]]], // 198
[[[], [38, [0, 191], [0, 195]]]], // 199
[[[], [39, [0, 193]]]], // 200
[[[], [40, [0, 200], [0, 305]]]], // 201
[[[], [41, [0, 191], [0, 193], [0, 189]]]], // 202
[[[], [42, [0, 202], [0, 289]]]], // 203
[[[], [43, [0, 191], [0, 189]]]], // 204
[[[], [34, [0, 375], [1, 17], [1, 18], [1, 18], [1, 17]]]], // 205
[[[], [34, [0, 375], [0, 390], [1, 39], [1, 20], [1, 0]]]], // 206
[[[], [34, [0, 375], [0, 385], [0, 411], [0, 426], [0, 436]]]], // 207
[[[], [34, [0, 375], [0, 88], [0, 88], [0, 88], [0, 88]]]], // 208
[[[], [34, [0, 375], [0, 388], [1, 30], [1, 31], [0, 437]]]], // 209
[[[], [34, [0, 375], [1, 23], [1, 24], [1, 24], [1, 23]]]], // 210
[[[], [34, [0, 375], [1, 25], [1, 26], [1, 27], [1, 26]]]], // 211
[[[], [35, [0, 209]]]], // 212
[[[], [36, [0, 209], [0, 207], [1, 38]]]], // 213
[[[], [37, [0, 208], [0, 212]]]], // 214
[[[], [38, [0, 207], [0, 211]]]], // 215
[[[], [39, [0, 209]]]], // 216
[[[], [40, [0, 216], [0, 305]]]], // 217
[[[], [41, [0, 207], [0, 209], [0, 205]]]], // 218
[[[], [42, [0, 218], [0, 289]]]], // 219
[[[], [43, [0, 207], [0, 205]]]], // 220
[[[], [34, [0, 375], [1, 17], [1, 18], [1, 18], [1, 17]]]], // 221
[[[], [34, [0, 375], [0, 390], [1, 39], [1, 20], [1, 0]]]], // 222
[[[], [34, [0, 375], [1, 13], [0, 412], [0, 427], [1, 13]]]], // 223
[[[], [34, [0, 375], [1, 32], [0, 88], [0, 88], [1, 32]]]], // 224
[[[], [34, [0, 375], [1, 8], [1, 33], [1, 34], [1, 8]]]], // 225
[[[], [34, [0, 375], [1, 23], [1, 24], [1, 24], [1, 23]]]], // 226
[[[], [34, [0, 375], [1, 25], [1, 26], [1, 27], [1, 26]]]], // 227
[[[], [35, [0, 225]]]], // 228
[[[], [36, [0, 225], [0, 223], [1, 38]]]], // 229
[[[], [37, [0, 224], [0, 228]]]], // 230
[[[], [38, [0, 223], [0, 227]]]], // 231
[[[], [39, [0, 225]]]], // 232
[[[], [40, [0, 232], [0, 305]]]], // 233
[[[], [41, [0, 223], [0, 225], [0, 221]]]], // 234
[[[], [42, [0, 234], [0, 289]]]], // 235
[[[], [43, [0, 223], [0, 221]]]], // 236
[[[], [34, [0, 375], [1, 17], [1, 18], [1, 18], [1, 17]]]], // 237
[[[], [34, [0, 375], [0, 390], [1, 39], [1, 20], [1, 0]]]], // 238
[[[], [34, [0, 375], [1, 13], [0, 413], [1, 13], [1, 13]]]], // 239
[[[], [34, [0, 375], [1, 32], [0, 88], [1, 32], [1, 32]]]], // 240
[[[], [34, [0, 375], [1, 8], [1, 35], [1, 8], [1, 8]]]], // 241
[[[], [34, [0, 375], [1, 23], [1, 24], [1, 24], [1, 23]]]], // 242
[[[], [34, [0, 375], [1, 25], [1, 26], [1, 27], [1, 26]]]], // 243
[[[], [35, [0, 241]]]], // 244
[[[], [36, [0, 241], [0, 239], [1, 38]]]], // 245
[[[], [37, [0, 240], [0, 244]]]], // 246
[[[], [38, [0, 239], [0, 243]]]], // 247
[[[], [39, [0, 241]]]], // 248
[[[], [40, [0, 248], [0, 305]]]], // 249
[[[], [41, [0, 239], [0, 241], [0, 237]]]], // 250
[[[], [42, [0, 250], [0, 289]]]], // 251
[[[], [43, [0, 239], [0, 237]]]], // 252
[[[], [34, [0, 375], [1, 17], [1, 17], [1, 18], [1, 17]]]], // 253
[[[], [34, [0, 375], [0, 390], [1, 36], [1, 20], [1, 0]]]], // 254
[[[], [34, [0, 375], [1, 13], [0, 414], [1, 13], [1, 13]]]], // 255
[[[], [34, [0, 375], [1, 32], [0, 87], [1, 32], [1, 32]]]], // 256
[[[], [34, [0, 375], [1, 8], [1, 40], [1, 8], [1, 8]]]], // 257
[[[], [34, [0, 375], [1, 23], [1, 41], [1, 24], [1, 23]]]], // 258
[[[], [34, [0, 375], [1, 25], [1, 26], [1, 27], [1, 26]]]], // 259
[[[], [35, [0, 257]]]], // 260
[[[], [36, [0, 257], [0, 255], [1, 38]]]], // 261
[[[], [37, [0, 256], [0, 260]]]], // 262
[[[], [38, [0, 255], [0, 259]]]], // 263
[[[], [39, [0, 257]]]], // 264
[[[], [40, [0, 264], [0, 305]]]], // 265
[[[], [41, [0, 255], [0, 257], [0, 253]]]], // 266
[[[], [42, [0, 266], [0, 289]]]], // 267
[[[], [43, [0, 255], [0, 253]]]], // 268
[[[], [45, [0, 117], [0, 134], [0, 151], [0, 168], [0, 185]]]], // 269
[[[], [21, [0, 269], [0, 324]]]], // 270
[[[], [46, [0, 284]]]], // 271
[[[], [47, [0, 278], [0, 276]]]], // 272
[[[], [48, [0, 118], [0, 135], [0, 152], [0, 169], [0, 186], [0, 105], [0, 122], [0, 139], [0, 156], [0, 173]]]], // 273
[[[], [45, [0, 106], [0, 123], [0, 140], [0, 157], [0, 174]]]], // 274
[[[], [45, [0, 112], [0, 129], [0, 146], [0, 163], [0, 180]]]], // 275
[[[], [34, [0, 375], [0, 380], [1, 42], [1, 43], [1, 44]]]], // 276
[[[], [49, [0, 275], [0, 295]]]], // 277
[[[], [48, [0, 118], [0, 135], [0, 152], [0, 169], [0, 186], [0, 107], [0, 124], [0, 141], [0, 158], [0, 175]]]], // 278
[[[], [45, [0, 119], [0, 136], [0, 153], [0, 170], [0, 187]]]], // 279
[[[], [48, [0, 118], [0, 135], [0, 152], [0, 169], [0, 186], [0, 113], [0, 130], [0, 147], [0, 164], [0, 181]]]], // 280
[[[], [22, [0, 282], [0, 272]]]], // 281
[[[], [50, [0, 321], [0, 286], [0, 273], [0, 271]]]], // 282
[[[], [48, [0, 118], [0, 135], [0, 152], [0, 169], [0, 186], [0, 108], [0, 125], [0, 142], [0, 159], [0, 176]]]], // 283
[[[], [48, [0, 118], [0, 135], [0, 152], [0, 169], [0, 186], [0, 109], [0, 126], [0, 143], [0, 160], [0, 177]]]], // 284
[[[], [51, [0, 117], [0, 115], [0, 134], [0, 132], [0, 151], [0, 149], [0, 168], [0, 166], [0, 185], [0, 183]]]], // 285
[[[], [48, [0, 116], [0, 133], [0, 150], [0, 167], [0, 184], [0, 114], [0, 131], [0, 148], [0, 165], [0, 182]]]], // 286
[[[], [45, [0, 120], [0, 137], [0, 154], [0, 171], [0, 188]]]], // 287
[[[], [21, [0, 287], [0, 275]]]], // 288
[[[], [45, [0, 202], [0, 218], [0, 234], [0, 250], [0, 266]]]], // 289
[[[], [21, [0, 289], [0, 324]]]], // 290
[[[], [46, [0, 304]]]], // 291
[[[], [47, [0, 298], [0, 296]]]], // 292
[[[], [48, [0, 203], [0, 219], [0, 235], [0, 251], [0, 267], [0, 190], [0, 206], [0, 222], [0, 238], [0, 254]]]], // 293
[[[], [45, [0, 191], [0, 207], [0, 223], [0, 239], [0, 255]]]], // 294
[[[], [45, [0, 197], [0, 213], [0, 229], [0, 245], [0, 261]]]], // 295
[[[], [52, [0, 297], [0, 288], [0, 276]]]], // 296
[[[], [49, [0, 275], [0, 295]]]], // 297
[[[], [48, [0, 203], [0, 219], [0, 235], [0, 251], [0, 267], [0, 192], [0, 208], [0, 224], [0, 240], [0, 256]]]], // 298
[[[], [45, [0, 204], [0, 220], [0, 236], [0, 252], [0, 268]]]], // 299
[[[], [48, [0, 203], [0, 219], [0, 235], [0, 251], [0, 267], [0, 198], [0, 214], [0, 230], [0, 246], [0, 262]]]], // 300
[[[], [22, [0, 302], [0, 292]]]], // 301
[[[], [50, [0, 321], [0, 306], [0, 293], [0, 291]]]], // 302
[[[], [48, [0, 203], [0, 219], [0, 235], [0, 251], [0, 267], [0, 193], [0, 209], [0, 225], [0, 241], [0, 257]]]], // 303
[[[], [48, [0, 203], [0, 219], [0, 235], [0, 251], [0, 267], [0, 194], [0, 210], [0, 226], [0, 242], [0, 258]]]], // 304
[[[], [51, [0, 202], [0, 200], [0, 218], [0, 216], [0, 234], [0, 232], [0, 250], [0, 248], [0, 266], [0, 264]]]], // 305
[[[], [48, [0, 201], [0, 217], [0, 233], [0, 249], [0, 265], [0, 199], [0, 215], [0, 231], [0, 247], [0, 263]]]], // 306
[[[], [34, [0, 375], [0, 379], [0, 396], [0, 420], [0, 431]]]], // 307
[[[], [21, [0, 312], [0, 307]]]], // 308
[[[], [48, [0, 270], [0, 290], [0, 280], [0, 300]]]], // 309
[[[], [53, [0, 309], [0, 308]]]], // 310
[[[], [54, [0, 318], [0, 317], [0, 310]]]], // 311
[[[], [45, [0, 274], [0, 294]]]], // 312
[[[], [55, [0, 307]]]], // 313
[[[], [56, [0, 279], [0, 299], [0, 307]]]], // 314
[[[], [57, [0, 322]]]], // 315
[[[], [21, [0, 314], [0, 315]]]], // 316
[[[], [58, [0, 322], [0, 314]]]], // 317
[[[], [45, [0, 281], [0, 301]]]], // 318
[[[], [59, [0, 322]]]], // 319
[[[], [60, [0, 323]]]], // 320
[[[], [61, [0, 316], [0, 320], [0, 319]]]], // 321
[[[], [48, [0, 270], [0, 290], [0, 283], [0, 303]]]], // 322
[[[], [62, [0, 322]]]], // 323
[[[], [45, [0, 269], [0, 289]]]], // 324
[[[], [63, [0, 374], [0, 338]]]], // 325
[[[], [64, [0, 374], [0, 361]]]], // 326
[[[], [25, [0, 96]]]], // 327
[[[], [65, [0, 326], [0, 325], [0, 327]]]], // 328
[[[], [66, [0, 326], [0, 327]]]], // 329
[[[], [67, [0, 328], [0, 329]]]], // 330
[[[], [68, [0, 342], [0, 333]]]], // 331
[[[], [68, [0, 344], [0, 350]]]], // 332
[[[], [69, [0, 371]]]], // 333
[[[], [70, [0, 333], [0, 356], [0, 359]]]], // 334
[[[], [71, [0, 374], [0, 334]]]], // 335
[[[], [25, [0, 93]]]], // 336
[[[], [72, [0, 314]]]], // 337
[[[], [73, [0, 336], [0, 337]]]], // 338
[[[], [74, [0, 340], [0, 356], [0, 360]]]], // 339
[[[], [75, [0, 361], [0, 338]]]], // 340
[[[], [71, [0, 374], [0, 340]]]], // 341
[[[], [74, [0, 343], [0, 356], [0, 360]]]], // 342
[[[], [76, [0, 374], [0, 344]]]], // 343
[[[], [77, [0, 374], [0, 330]]]], // 344
[[[], [78, [0, 342], [0, 333]]]], // 345
[[[], [78, [0, 343], [0, 334]]]], // 346
[[[], [78, [0, 344], [0, 335]]]], // 347
[[[], [74, [0, 349], [0, 356], [0, 360]]]], // 348
[[[], [76, [0, 374], [0, 350]]]], // 349
[[[], [79, [0, 344], [0, 342]]]], // 350
[[[], [74, [0, 352], [0, 356], [0, 360]]]], // 351
[[[], [76, [0, 374], [0, 353]]]], // 352
[[[], [79, [0, 347], [0, 345]]]], // 353
[[[20, 45], [25, [0, 103]]], [[], [80, [0, 50], [0, 53], [0, 313]]]], // 354
[[[25, 16], [25, [0, 102]]], [[], [33, [0, 101], [0, 354]]]], // 355
[[[], [81, [0, 322]]]], // 356
[[[], [82, [0, 322]]]], // 357
[[[], [83, [0, 322]]]], // 358
[[[], [84, [0, 316], [0, 358], [0, 357]]]], // 359
[[[], [85, [0, 316], [0, 358], [0, 357]]]], // 360
[[[], [86, [0, 355], [0, 356], [0, 359]]]], // 361
[[[28, 46], [25, [0, 351]]], [[], [25, [0, 348]]]], // 362
[[[], [87, [0, 373], [0, 371], [0, 365]]]], // 363
[[[], [17, [0, 363]]]], // 364
[[[], [88, [0, 322]]]], // 365
[[[], [89, [0, 328], [0, 329], [0, 330]]]], // 366
[[[], [19, [0, 91], [0, 366]]]], // 367
[[[], [90, [0, 371], [0, 365]]]], // 368
[[[], [20, [0, 362]]]], // 369
[[[28, 46], [25, [0, 352]]], [[], [25, [0, 349]]]], // 370
[[[], [25, [0, 318]]]], // 371
[[[], [91, [0, 363], [0, 355], [0, 94]]]], // 372
[[[28, 46], [25, [0, 353]]], [[], [25, [0, 350]]]], // 373
[[[], [25, [0, 311]]]], // 374
[[[17, 47], [92, [0, 376]]], [[17, 48], [9, [1, 48]]], [[17, 49], [9, [1, 49]]], [[17, 50], [9, [1, 50]]], [[17, 51], [9, [1, 51]]], [[], [9, [1, 52]]]], // 375
[[[], [2]]], // 376
[[[], [9, [1, 48]]]], // 377
[[[21, 53], [93, [0, 87]]], [[], [2]]], // 378
[[[17, 47], [94, [0, 376]]], [[17, 48], [2]], [[], [9, [1, 23]]]], // 379
[[[17, 47], [95, [0, 376]]], [[17, 48], [2]], [[], [9, [1, 44]]]], // 380
[[[17, 47], [96, [0, 376]]], [[17, 48], [2]], [[], [9, [1, 13]]]], // 381
[[[17, 47], [97, [0, 376]]], [[17, 48], [2]], [[], [9, [1, 13]]]], // 382
[[[17, 47], [98, [0, 376]]], [[17, 48], [2]], [[], [9, [1, 13]]]], // 383
[[[17, 47], [99, [0, 376]]], [[17, 48], [2]], [[], [9, [1, 13]]]], // 384
[[[17, 47], [100, [0, 376]]], [[17, 48], [2]], [[], [9, [1, 13]]]], // 385
[[[17, 47], [101, [0, 376]]], [[17, 48], [2]], [[], [9, [1, 13]]]], // 386
[[[17, 47], [102, [0, 376]]], [[17, 48], [2]], [[], [9, [1, 8]]]], // 387
[[[17, 47], [103, [0, 376]]], [[17, 48], [2]], [[], [9, [1, 8]]]], // 388
[[[17, 47], [104, [0, 376]]], [[17, 48], [2]], [[], [9, [1, 0]]]], // 389
[[[17, 47], [105, [0, 376]]], [[17, 48], [2]], [[], [9, [1, 0]]]], // 390
[[[], [106, [0, 381], [0, 378]]]], // 391
[[[], [107, [0, 381], [0, 378]]]], // 392
[[[], [9, [1, 49]]]], // 393
[[[17, 47], [108, [0, 376]]], [[17, 49], [2]], [[], [9, [1, 54]]]], // 394
[[[17, 47], [109, [0, 376]]], [[17, 49], [2]], [[], [9, [1, 13]]]], // 395
[[[17, 47], [110, [0, 376]]], [[17, 49], [2]], [[], [9, [1, 23]]]], // 396
[[[17, 47], [111, [0, 376]]], [[17, 49], [2]], [[], [9, [1, 13]]]], // 397
[[[22, 53], [25, [0, 403]]], [[], [25, [0, 397]]]], // 398
[[[], [112, [0, 396], [0, 394]]]], // 399
[[[], [113, [0, 399]]]], // 400
[[[], [114, [0, 399]]]], // 401
[[[], [115, [0, 399], [0, 394]]]], // 402
[[[], [116, [0, 399], [0, 394]]]], // 403
[[[], [117, [0, 398], [0, 395]]]], // 404
[[[], [118, [0, 398], [0, 395]]]], // 405
[[[], [119, [0, 398], [0, 395]]]], // 406
[[[], [120, [0, 398], [0, 395]]]], // 407
[[[], [121, [0, 398], [0, 395]]]], // 408
[[[], [122, [0, 398], [0, 395]]]], // 409
[[[], [123, [0, 398], [0, 395]]]], // 410
[[[], [124, [0, 398], [0, 395]]]], // 411
[[[], [125, [0, 398], [0, 395]]]], // 412
[[[], [126, [0, 398], [0, 395]]]], // 413
[[[], [127, [0, 398], [0, 395]]]], // 414
[[[], [9, [1, 50]]]], // 415
[[[17, 47], [128, [0, 376]]], [[17, 50], [2]], [[], [9, [1, 13]]]], // 416
[[[17, 47], [129, [0, 376]]], [[17, 50], [2]], [[], [9, [1, 13]]]], // 417
[[[17, 47], [130, [0, 376]]], [[17, 50], [2]], [[], [9, [1, 13]]]], // 418
[[[17, 47], [131, [0, 376]]], [[17, 50], [2]], [[], [9, [1, 23]]]], // 419
[[[], [132, [0, 419]]]], // 420
[[[], [133, [0, 416], [0, 419]]]], // 421
[[[], [134, [0, 416], [0, 418]]]], // 422
[[[], [135, [0, 416], [0, 418]]]], // 423
[[[], [136, [0, 416], [0, 417]]]], // 424
[[[], [137, [0, 416], [0, 419]]]], // 425
[[[], [138, [0, 416], [0, 419]]]], // 426
[[[], [139, [0, 416], [0, 418], [0, 419]]]], // 427
[[[], [9, [1, 51]]]], // 428
[[[17, 47], [140, [0, 376]]], [[17, 51], [2]], [[], [9, [1, 55]]]], // 429
[[[17, 47], [141, [0, 376]]], [[17, 51], [2]], [[], [9, [1, 13]]]], // 430
[[[], [142, [0, 429]]]], // 431
[[[], [143, [0, 429], [0, 430]]]], // 432
[[[], [144, [0, 429]]]], // 433
[[[], [145, [0, 429], [0, 430]]]], // 434
[[[], [146, [0, 429], [0, 430]]]], // 435
[[[], [147, [0, 429], [0, 430]]]], // 436
[[[], [148, [0, 429], [0, 430]]]], // 437
[[[], [34, [0, 709], [1, 17], [1, 18], [1, 19], [1, 17]]]], // 438
[[[], [34, [0, 709], [0, 723], [1, 0], [1, 20], [1, 0]]]], // 439
[[[], [34, [0, 709], [0, 716], [0, 739], [0, 755], [0, 766]]]], // 440
[[[], [34, [0, 709], [0, 83], [0, 83], [0, 83], [0, 83]]]], // 441
[[[], [34, [0, 709], [0, 720], [1, 21], [1, 22], [0, 768]]]], // 442
[[[], [34, [0, 709], [1, 23], [1, 24], [1, 23], [1, 23]]]], // 443
[[[], [34, [0, 709], [1, 25], [1, 26], [1, 27], [1, 26]]]], // 444
[[[], [35, [0, 442]]]], // 445
[[[], [36, [0, 442], [0, 440], [1, 28]]]], // 446
[[[], [37, [0, 441], [0, 445]]]], // 447
[[[], [38, [0, 440], [0, 444]]]], // 448
[[[], [39, [0, 442]]]], // 449
[[[], [40, [0, 449], [0, 619]]]], // 450
[[[], [41, [0, 440], [0, 442], [0, 438]]]], // 451
[[[], [42, [0, 451], [0, 603]]]], // 452
[[[], [43, [0, 440], [0, 438]]]], // 453
[[[], [44, [0, 446], [0, 441]]]], // 454
[[[], [34, [0, 709], [1, 17], [1, 18], [1, 19], [1, 17]]]], // 455
[[[], [34, [0, 709], [0, 723], [1, 0], [1, 20], [1, 0]]]], // 456
[[[], [34, [0, 709], [0, 717], [0, 740], [0, 756], [0, 767]]]], // 457
[[[], [34, [0, 709], [0, 84], [0, 84], [0, 84], [0, 84]]]], // 458
[[[], [34, [0, 709], [1, 29], [1, 30], [1, 31], [1, 29]]]], // 459
[[[], [34, [0, 709], [1, 23], [1, 24], [1, 23], [1, 23]]]], // 460
[[[], [34, [0, 709], [1, 25], [1, 26], [1, 27], [1, 26]]]], // 461
[[[], [35, [0, 459]]]], // 462
[[[], [36, [0, 459], [0, 457], [1, 28]]]], // 463
[[[], [37, [0, 458], [0, 462]]]], // 464
[[[], [38, [0, 457], [0, 461]]]], // 465
[[[], [39, [0, 459]]]], // 466
[[[], [40, [0, 466], [0, 619]]]], // 467
[[[], [41, [0, 457], [0, 459], [0, 455]]]], // 468
[[[], [42, [0, 468], [0, 603]]]], // 469
[[[], [43, [0, 457], [0, 455]]]], // 470
[[[], [44, [0, 463], [0, 458]]]], // 471
[[[], [34, [0, 709], [1, 17], [1, 18], [1, 19], [1, 17]]]], // 472
[[[], [34, [0, 709], [0, 723], [1, 0], [1, 20], [1, 0]]]], // 473
[[[], [34, [0, 709], [0, 718], [0, 741], [0, 757], [1, 13]]]], // 474
[[[], [34, [0, 709], [0, 85], [0, 84], [0, 83], [1, 32]]]], // 475
[[[], [34, [0, 709], [1, 19], [1, 33], [1, 34], [1, 8]]]], // 476
[[[], [34, [0, 709], [1, 23], [1, 24], [1, 23], [1, 23]]]], // 477
[[[], [34, [0, 709], [1, 25], [1, 26], [1, 27], [1, 26]]]], // 478
[[[], [35, [0, 476]]]], // 479
[[[], [36, [0, 476], [0, 474], [1, 28]]]], // 480
[[[], [37, [0, 475], [0, 479]]]], // 481
[[[], [38, [0, 474], [0, 478]]]], // 482
[[[], [39, [0, 476]]]], // 483
[[[], [40, [0, 483], [0, 619]]]], // 484
[[[], [41, [0, 474], [0, 476], [0, 472]]]], // 485
[[[], [42, [0, 485], [0, 603]]]], // 486
[[[], [43, [0, 474], [0, 472]]]], // 487
[[[], [44, [0, 480], [0, 475]]]], // 488
[[[], [34, [0, 709], [1, 17], [1, 18], [1, 19], [1, 17]]]], // 489
[[[], [34, [0, 709], [0, 723], [1, 0], [1, 20], [1, 0]]]], // 490
[[[], [34, [0, 709], [0, 725], [0, 742], [0, 758], [1, 13]]]], // 491
[[[], [34, [0, 709], [0, 83], [0, 85], [0, 85], [1, 32]]]], // 492
[[[], [34, [0, 709], [0, 721], [1, 35], [1, 34], [1, 8]]]], // 493
[[[], [34, [0, 709], [1, 23], [1, 24], [1, 23], [1, 23]]]], // 494
[[[], [34, [0, 709], [1, 25], [1, 26], [1, 27], [1, 26]]]], // 495
[[[], [35, [0, 493]]]], // 496
[[[], [36, [0, 493], [0, 491], [1, 28]]]], // 497
[[[], [37, [0, 492], [0, 496]]]], // 498
[[[], [38, [0, 491], [0, 495]]]], // 499
[[[], [39, [0, 493]]]], // 500
[[[], [40, [0, 500], [0, 619]]]], // 501
[[[], [41, [0, 491], [0, 493], [0, 489]]]], // 502
[[[], [42, [0, 502], [0, 603]]]], // 503
[[[], [43, [0, 491], [0, 489]]]], // 504
[[[], [44, [0, 497], [0, 492]]]], // 505
[[[], [9, [1, 17]]]], // 506
[[[], [9, [1, 0]]]], // 507
[[[], [9, [1, 13]]]], // 508
[[[], [9, [1, 32]]]], // 509
[[[], [9, [1, 8]]]], // 510
[[[], [9, [1, 23]]]], // 511
[[[], [9, [1, 25]]]], // 512
[[[], [35, [0, 510]]]], // 513
[[[], [36, [0, 510], [0, 508], [1, 28]]]], // 514
[[[], [37, [0, 509], [0, 513]]]], // 515
[[[], [38, [0, 508], [0, 512]]]], // 516
[[[], [39, [0, 510]]]], // 517
[[[], [40, [0, 517], [0, 619]]]], // 518
[[[], [41, [0, 508], [0, 510], [0, 506]]]], // 519
[[[], [42, [0, 519], [0, 603]]]], // 520
[[[], [43, [0, 508], [0, 506]]]], // 521
[[[], [44, [0, 514], [0, 509]]]], // 522
[[[], [34, [0, 709], [1, 17], [1, 18], [1, 18], [1, 17]]]], // 523
[[[], [34, [0, 709], [0, 724], [1, 36], [1, 20], [1, 0]]]], // 524
[[[], [34, [0, 709], [0, 726], [0, 744], [0, 759], [0, 769]]]], // 525
[[[], [34, [0, 709], [0, 87], [0, 88], [0, 88], [0, 87]]]], // 526
[[[], [34, [0, 709], [0, 721], [1, 21], [1, 22], [1, 37]]]], // 527
[[[], [34, [0, 709], [1, 23], [1, 24], [1, 24], [1, 23]]]], // 528
[[[], [34, [0, 709], [1, 25], [1, 26], [1, 27], [1, 26]]]], // 529
[[[], [35, [0, 527]]]], // 530
[[[], [36, [0, 527], [0, 525], [1, 38]]]], // 531
[[[], [37, [0, 526], [0, 530]]]], // 532
[[[], [38, [0, 525], [0, 529]]]], // 533
[[[], [39, [0, 527]]]], // 534
[[[], [40, [0, 534], [0, 639]]]], // 535
[[[], [41, [0, 525], [0, 527], [0, 523]]]], // 536
[[[], [42, [0, 536], [0, 623]]]], // 537
[[[], [43, [0, 525], [0, 523]]]], // 538
[[[], [34, [0, 709], [1, 17], [1, 18], [1, 18], [1, 17]]]], // 539
[[[], [34, [0, 709], [0, 724], [1, 39], [1, 20], [1, 0]]]], // 540
[[[], [34, [0, 709], [0, 719], [0, 745], [0, 760], [0, 770]]]], // 541
[[[], [34, [0, 709], [0, 88], [0, 88], [0, 88], [0, 88]]]], // 542
[[[], [34, [0, 709], [0, 722], [1, 30], [1, 31], [0, 771]]]], // 543
[[[], [34, [0, 709], [1, 23], [1, 24], [1, 24], [1, 23]]]], // 544
[[[], [34, [0, 709], [1, 25], [1, 26], [1, 27], [1, 26]]]], // 545
[[[], [35, [0, 543]]]], // 546
[[[], [36, [0, 543], [0, 541], [1, 38]]]], // 547
[[[], [37, [0, 542], [0, 546]]]], // 548
[[[], [38, [0, 541], [0, 545]]]], // 549
[[[], [39, [0, 543]]]], // 550
[[[], [40, [0, 550], [0, 639]]]], // 551
[[[], [41, [0, 541], [0, 543], [0, 539]]]], // 552
[[[], [42, [0, 552], [0, 623]]]], // 553
[[[], [43, [0, 541], [0, 539]]]], // 554
[[[], [34, [0, 709], [1, 17], [1, 18], [1, 18], [1, 17]]]], // 555
[[[], [34, [0, 709], [0, 724], [1, 39], [1, 20], [1, 0]]]], // 556
[[[], [34, [0, 709], [1, 13], [0, 746], [0, 761], [1, 13]]]], // 557
[[[], [34, [0, 709], [1, 32], [0, 88], [0, 88], [1, 32]]]], // 558
[[[], [34, [0, 709], [1, 8], [1, 33], [1, 34], [1, 8]]]], // 559
[[[], [34, [0, 709], [1, 23], [1, 24], [1, 24], [1, 23]]]], // 560
[[[], [34, [0, 709], [1, 25], [1, 26], [1, 27], [1, 26]]]], // 561
[[[], [35, [0, 559]]]], // 562
[[[], [36, [0, 559], [0, 557], [1, 38]]]], // 563
[[[], [37, [0, 558], [0, 562]]]], // 564
[[[], [38, [0, 557], [0, 561]]]], // 565
[[[], [39, [0, 559]]]], // 566
[[[], [40, [0, 566], [0, 639]]]], // 567
[[[], [41, [0, 557], [0, 559], [0, 555]]]], // 568
[[[], [42, [0, 568], [0, 623]]]], // 569
[[[], [43, [0, 557], [0, 555]]]], // 570
[[[], [34, [0, 709], [1, 17], [1, 18], [1, 18], [1, 17]]]], // 571
[[[], [34, [0, 709], [0, 724], [1, 39], [1, 20], [1, 0]]]], // 572
[[[], [34, [0, 709], [1, 13], [0, 747], [1, 13], [1, 13]]]], // 573
[[[], [34, [0, 709], [1, 32], [0, 88], [1, 32], [1, 32]]]], // 574
[[[], [34, [0, 709], [1, 8], [1, 35], [1, 8], [1, 8]]]], // 575
[[[], [34, [0, 709], [1, 23], [1, 24], [1, 24], [1, 23]]]], // 576
[[[], [34, [0, 709], [1, 25], [1, 26], [1, 27], [1, 26]]]], // 577
[[[], [35, [0, 575]]]], // 578
[[[], [36, [0, 575], [0, 573], [1, 38]]]], // 579
[[[], [37, [0, 574], [0, 578]]]], // 580
[[[], [38, [0, 573], [0, 577]]]], // 581
[[[], [39, [0, 575]]]], // 582
[[[], [40, [0, 582], [0, 639]]]], // 583
[[[], [41, [0, 573], [0, 575], [0, 571]]]], // 584
[[[], [42, [0, 584], [0, 623]]]], // 585
[[[], [43, [0, 573], [0, 571]]]], // 586
[[[], [34, [0, 709], [1, 17], [1, 17], [1, 18], [1, 17]]]], // 587
[[[], [34, [0, 709], [0, 724], [1, 36], [1, 20], [1, 0]]]], // 588
[[[], [34, [0, 709], [1, 13], [0, 748], [1, 13], [1, 13]]]], // 589
[[[], [34, [0, 709], [1, 32], [0, 87], [1, 32], [1, 32]]]], // 590
[[[], [34, [0, 709], [1, 8], [1, 40], [1, 8], [1, 8]]]], // 591
[[[], [34, [0, 709], [1, 23], [1, 41], [1, 24], [1, 23]]]], // 592
[[[], [34, [0, 709], [1, 25], [1, 26], [1, 27], [1, 26]]]], // 593
[[[], [35, [0, 591]]]], // 594
[[[], [36, [0, 591], [0, 589], [1, 38]]]], // 595
[[[], [37, [0, 590], [0, 594]]]], // 596
[[[], [38, [0, 589], [0, 593]]]], // 597
[[[], [39, [0, 591]]]], // 598
[[[], [40, [0, 598], [0, 639]]]], // 599
[[[], [41, [0, 589], [0, 591], [0, 587]]]], // 600
[[[], [42, [0, 600], [0, 623]]]], // 601
[[[], [43, [0, 589], [0, 587]]]], // 602
[[[], [45, [0, 451], [0, 468], [0, 485], [0, 502], [0, 519]]]], // 603
[[[], [21, [0, 603], [0, 658]]]], // 604
[[[], [46, [0, 618]]]], // 605
[[[], [47, [0, 612], [0, 610]]]], // 606
[[[], [48, [0, 452], [0, 469], [0, 486], [0, 503], [0, 520], [0, 439], [0, 456], [0, 473], [0, 490], [0, 507]]]], // 607
[[[], [45, [0, 440], [0, 457], [0, 474], [0, 491], [0, 508]]]], // 608
[[[], [45, [0, 446], [0, 463], [0, 480], [0, 497], [0, 514]]]], // 609
[[[], [34, [0, 709], [0, 714], [1, 42], [1, 43], [1, 44]]]], // 610
[[[], [49, [0, 609], [0, 629]]]], // 611
[[[], [48, [0, 452], [0, 469], [0, 486], [0, 503], [0, 520], [0, 441], [0, 458], [0, 475], [0, 492], [0, 509]]]], // 612
[[[], [45, [0, 453], [0, 470], [0, 487], [0, 504], [0, 521]]]], // 613
[[[], [48, [0, 452], [0, 469], [0, 486], [0, 503], [0, 520], [0, 447], [0, 464], [0, 481], [0, 498], [0, 515]]]], // 614
[[[], [22, [0, 616], [0, 606]]]], // 615
[[[], [50, [0, 655], [0, 620], [0, 607], [0, 605]]]], // 616
[[[], [48, [0, 452], [0, 469], [0, 486], [0, 503], [0, 520], [0, 442], [0, 459], [0, 476], [0, 493], [0, 510]]]], // 617
[[[], [48, [0, 452], [0, 469], [0, 486], [0, 503], [0, 520], [0, 443], [0, 460], [0, 477], [0, 494], [0, 511]]]], // 618
[[[], [51, [0, 451], [0, 449], [0, 468], [0, 466], [0, 485], [0, 483], [0, 502], [0, 500], [0, 519], [0, 517]]]], // 619
[[[], [48, [0, 450], [0, 467], [0, 484], [0, 501], [0, 518], [0, 448], [0, 465], [0, 482], [0, 499], [0, 516]]]], // 620
[[[], [45, [0, 454], [0, 471], [0, 488], [0, 505], [0, 522]]]], // 621
[[[], [21, [0, 621], [0, 609]]]], // 622
[[[], [45, [0, 536], [0, 552], [0, 568], [0, 584], [0, 600]]]], // 623
[[[], [21, [0, 623], [0, 658]]]], // 624
[[[], [46, [0, 638]]]], // 625
[[[], [47, [0, 632], [0, 630]]]], // 626
[[[], [48, [0, 537], [0, 553], [0, 569], [0, 585], [0, 601], [0, 524], [0, 540], [0, 556], [0, 572], [0, 588]]]], // 627
[[[], [45, [0, 525], [0, 541], [0, 557], [0, 573], [0, 589]]]], // 628
[[[], [45, [0, 531], [0, 547], [0, 563], [0, 579], [0, 595]]]], // 629
[[[], [52, [0, 631], [0, 622], [0, 610]]]], // 630
[[[], [49, [0, 609], [0, 629]]]], // 631
[[[], [48, [0, 537], [0, 553], [0, 569], [0, 585], [0, 601], [0, 526], [0, 542], [0, 558], [0, 574], [0, 590]]]], // 632
[[[], [45, [0, 538], [0, 554], [0, 570], [0, 586], [0, 602]]]], // 633
[[[], [48, [0, 537], [0, 553], [0, 569], [0, 585], [0, 601], [0, 532], [0, 548], [0, 564], [0, 580], [0, 596]]]], // 634
[[[], [22, [0, 636], [0, 626]]]], // 635
[[[], [50, [0, 655], [0, 640], [0, 627], [0, 625]]]], // 636
[[[], [48, [0, 537], [0, 553], [0, 569], [0, 585], [0, 601], [0, 527], [0, 543], [0, 559], [0, 575], [0, 591]]]], // 637
[[[], [48, [0, 537], [0, 553], [0, 569], [0, 585], [0, 601], [0, 528], [0, 544], [0, 560], [0, 576], [0, 592]]]], // 638
[[[], [51, [0, 536], [0, 534], [0, 552], [0, 550], [0, 568], [0, 566], [0, 584], [0, 582], [0, 600], [0, 598]]]], // 639
[[[], [48, [0, 535], [0, 551], [0, 567], [0, 583], [0, 599], [0, 533], [0, 549], [0, 565], [0, 581], [0, 597]]]], // 640
[[[], [34, [0, 709], [0, 713], [0, 730], [0, 754], [0, 765]]]], // 641
[[[], [21, [0, 646], [0, 641]]]], // 642
[[[], [48, [0, 604], [0, 624], [0, 614], [0, 634]]]], // 643
[[[], [53, [0, 643], [0, 642]]]], // 644
[[[], [54, [0, 652], [0, 651], [0, 644]]]], // 645
[[[], [45, [0, 608], [0, 628]]]], // 646
[[[], [55, [0, 641]]]], // 647
[[[], [56, [0, 613], [0, 633], [0, 641]]]], // 648
[[[], [57, [0, 656]]]], // 649
[[[], [21, [0, 648], [0, 649]]]], // 650
[[[], [58, [0, 656], [0, 648]]]], // 651
[[[], [45, [0, 615], [0, 635]]]], // 652
[[[], [59, [0, 656]]]], // 653
[[[], [60, [0, 657]]]], // 654
[[[], [61, [0, 650], [0, 654], [0, 653]]]], // 655
[[[], [48, [0, 604], [0, 624], [0, 617], [0, 637]]]], // 656
[[[], [62, [0, 656]]]], // 657
[[[], [45, [0, 603], [0, 623]]]], // 658
[[[], [63, [0, 708], [0, 672]]]], // 659
[[[], [64, [0, 708], [0, 695]]]], // 660
[[[], [25, [0, 96]]]], // 661
[[[], [65, [0, 660], [0, 659], [0, 661]]]], // 662
[[[], [66, [0, 660], [0, 661]]]], // 663
[[[], [67, [0, 662], [0, 663]]]], // 664
[[[], [68, [0, 676], [0, 667]]]], // 665
[[[], [68, [0, 678], [0, 684]]]], // 666
[[[], [69, [0, 705]]]], // 667
[[[], [70, [0, 667], [0, 690], [0, 693]]]], // 668
[[[], [71, [0, 708], [0, 668]]]], // 669
[[[], [25, [0, 93]]]], // 670
[[[], [72, [0, 648]]]], // 671
[[[], [73, [0, 670], [0, 671]]]], // 672
[[[], [74, [0, 674], [0, 690], [0, 694]]]], // 673
[[[], [75, [0, 695], [0, 672]]]], // 674
[[[], [71, [0, 708], [0, 674]]]], // 675
[[[], [74, [0, 677], [0, 690], [0, 694]]]], // 676
[[[], [76, [0, 708], [0, 678]]]], // 677
[[[], [77, [0, 708], [0, 664]]]], // 678
[[[], [78, [0, 676], [0, 667]]]], // 679
[[[], [78, [0, 677], [0, 668]]]], // 680
[[[], [78, [0, 678], [0, 669]]]], // 681
[[[], [74, [0, 683], [0, 690], [0, 694]]]], // 682
[[[], [76, [0, 708], [0, 684]]]], // 683
[[[], [79, [0, 678], [0, 676]]]], // 684
[[[], [74, [0, 686], [0, 690], [0, 694]]]], // 685
[[[], [76, [0, 708], [0, 687]]]], // 686
[[[], [79, [0, 681], [0, 679]]]], // 687
[[[20, 45], [25, [0, 103]]], [[], [80, [0, 50], [0, 53], [0, 647]]]], // 688
[[[25, 16], [25, [0, 102]]], [[], [33, [0, 101], [0, 688]]]], // 689
[[[], [81, [0, 656]]]], // 690
[[[], [82, [0, 656]]]], // 691
[[[], [83, [0, 656]]]], // 692
[[[], [84, [0, 650], [0, 692], [0, 691]]]], // 693
[[[], [85, [0, 650], [0, 692], [0, 691]]]], // 694
[[[], [86, [0, 689], [0, 690], [0, 693]]]], // 695
[[[28, 46], [25, [0, 685]]], [[], [25, [0, 682]]]], // 696
[[[], [87, [0, 707], [0, 705], [0, 699]]]], // 697
[[[], [17, [0, 697]]]], // 698
[[[], [88, [0, 656]]]], // 699
[[[], [89, [0, 662], [0, 663], [0, 664]]]], // 700
[[[], [19, [0, 91], [0, 700]]]], // 701
[[[], [90, [0, 705], [0, 699]]]], // 702
[[[], [20, [0, 696]]]], // 703
[[[28, 46], [25, [0, 686]]], [[], [25, [0, 683]]]], // 704
[[[], [25, [0, 652]]]], // 705
[[[], [91, [0, 697], [0, 689], [0, 94]]]], // 706
[[[28, 46], [25, [0, 687]]], [[], [25, [0, 684]]]], // 707
[[[], [25, [0, 645]]]], // 708
[[[18, 47], [92, [0, 710]]], [[18, 48], [9, [1, 48]]], [[18, 49], [9, [1, 49]]], [[18, 50], [9, [1, 50]]], [[18, 51], [9, [1, 51]]], [[], [9, [1, 52]]]], // 709
[[[], [2]]], // 710
[[[], [9, [1, 48]]]], // 711
[[[21, 53], [93, [0, 87]]], [[], [2]]], // 712
[[[18, 47], [94, [0, 710]]], [[18, 48], [2]], [[], [9, [1, 23]]]], // 713
[[[18, 47], [95, [0, 710]]], [[18, 48], [2]], [[], [9, [1, 44]]]], // 714
[[[18, 47], [96, [0, 710]]], [[18, 48], [2]], [[], [9, [1, 13]]]], // 715
[[[18, 47], [97, [0, 710]]], [[18, 48], [2]], [[], [9, [1, 13]]]], // 716
[[[18, 47], [98, [0, 710]]], [[18, 48], [2]], [[], [9, [1, 13]]]], // 717
[[[18, 47], [99, [0, 710]]], [[18, 48], [2]], [[], [9, [1, 13]]]], // 718
[[[18, 47], [100, [0, 710]]], [[18, 48], [2]], [[], [9, [1, 13]]]], // 719
[[[18, 47], [101, [0, 710]]], [[18, 48], [2]], [[], [9, [1, 13]]]], // 720
[[[18, 47], [102, [0, 710]]], [[18, 48], [2]], [[], [9, [1, 8]]]], // 721
[[[18, 47], [103, [0, 710]]], [[18, 48], [2]], [[], [9, [1, 8]]]], // 722
[[[18, 47], [104, [0, 710]]], [[18, 48], [2]], [[], [9, [1, 0]]]], // 723
[[[18, 47], [105, [0, 710]]], [[18, 48], [2]], [[], [9, [1, 0]]]], // 724
[[[], [106, [0, 715], [0, 712]]]], // 725
[[[], [107, [0, 715], [0, 712]]]], // 726
[[[], [9, [1, 49]]]], // 727
[[[18, 47], [108, [0, 710]]], [[18, 49], [2]], [[], [9, [1, 54]]]], // 728
[[[18, 47], [109, [0, 710]]], [[18, 49], [2]], [[], [9, [1, 13]]]], // 729
[[[18, 47], [110, [0, 710]]], [[18, 49], [2]], [[], [9, [1, 23]]]], // 730
[[[18, 47], [111, [0, 710]]], [[18, 49], [2]], [[], [9, [1, 13]]]], // 731
[[[22, 53], [25, [0, 737]]], [[], [25, [0, 731]]]], // 732
[[[], [112, [0, 730], [0, 728]]]], // 733
[[[], [113, [0, 733]]]], // 734
[[[], [114, [0, 733]]]], // 735
[[[], [115, [0, 733], [0, 728]]]], // 736
[[[], [116, [0, 733], [0, 728]]]], // 737
[[[], [117, [0, 732], [0, 729]]]], // 738
[[[], [118, [0, 732], [0, 729]]]], // 739
[[[], [119, [0, 732], [0, 729]]]], // 740
[[[], [120, [0, 732], [0, 729]]]], // 741
[[[], [121, [0, 732], [0, 729]]]], // 742
[[[], [122, [0, 732], [0, 729]]]], // 743
[[[], [123, [0, 732], [0, 729]]]], // 744
[[[], [124, [0, 732], [0, 729]]]], // 745
[[[], [125, [0, 732], [0, 729]]]], // 746
[[[], [126, [0, 732], [0, 729]]]], // 747
[[[], [127, [0, 732], [0, 729]]]], // 748
[[[], [9, [1, 50]]]], // 749
[[[18, 47], [128, [0, 710]]], [[18, 50], [2]], [[], [9, [1, 13]]]], // 750
[[[18, 47], [129, [0, 710]]], [[18, 50], [2]], [[], [9, [1, 13]]]], // 751
[[[18, 47], [130, [0, 710]]], [[18, 50], [2]], [[], [9, [1, 13]]]], // 752
[[[18, 47], [131, [0, 710]]], [[18, 50], [2]], [[], [9, [1, 23]]]], // 753
[[[], [132, [0, 753]]]], // 754
[[[], [133, [0, 750], [0, 753]]]], // 755
[[[], [134, [0, 750], [0, 752]]]], // 756
[[[], [135, [0, 750], [0, 752]]]], // 757
[[[], [136, [0, 750], [0, 751]]]], // 758
[[[], [137, [0, 750], [0, 753]]]], // 759
[[[], [138, [0, 750], [0, 753]]]], // 760
[[[], [139, [0, 750], [0, 752], [0, 753]]]], // 761
[[[], [9, [1, 51]]]], // 762
[[[18, 47], [140, [0, 710]]], [[18, 51], [2]], [[], [9, [1, 55]]]], // 763
[[[18, 47], [141, [0, 710]]], [[18, 51], [2]], [[], [9, [1, 13]]]], // 764
[[[], [142, [0, 763]]]], // 765
[[[], [143, [0, 763], [0, 764]]]], // 766
[[[], [144, [0, 763]]]], // 767
[[[], [145, [0, 763], [0, 764]]]], // 768
[[[], [146, [0, 763], [0, 764]]]], // 769
[[[], [147, [0, 763], [0, 764]]]], // 770
[[[], [148, [0, 763], [0, 764]]]], // 771
[[[18, 52], [9, [1, 8]]], [[], [2]]], // 772
[[[], [25, [0, 362]]]], // 773
[[[], [25, [0, 366]]]], // 774
[[[], [25, [0, 367]]]], // 775
[[[], [25, [0, 369]]]], // 776
[[[], [25, [0, 355]]]], // 777
[[[], [25, [0, 354]]]], // 778
[[[18, 52], [25, [0, 363]]], [[], [149, [0, 363], [0, 697]]]], // 779
[[[18, 52], [25, [0, 364]]], [[], [149, [0, 364], [0, 698]]]], // 780
[[[18, 52], [25, [0, 368]]], [[], [149, [0, 368], [0, 702]]]], // 781
[[[18, 52], [25, [0, 371]]], [[], [149, [0, 371], [0, 705]]]], // 782
[[[18, 52], [25, [0, 372]]], [[], [149, [0, 372], [0, 706]]]], // 783
[[[18, 52], [25, [0, 331]]], [[], [150, [0, 331], [0, 665]]]], // 784
[[[18, 52], [25, [0, 333]]], [[], [78, [0, 333], [0, 667]]]], // 785
[[[29, 56], [25, [0, 788]]], [[29, 57], [25, [0, 789]]], [[], [25, [0, 787]]]], // 786
[[[18, 52], [25, [0, 373]]], [[], [151, [0, 772], [0, 373], [0, 707]]]], // 787
[[[18, 52], [25, [0, 373]]], [[], [152, [0, 772], [0, 373], [0, 707]]]], // 788
[[[18, 52], [25, [0, 373]]], [[], [153, [0, 772], [0, 373], [0, 707]]]], // 789
[[[], [154, [0, 792]]]], // 790
[[[13, 58], [25, [0, 773]]], [[], [25, [0, 60]]]], // 791
[[[13, 58], [25, [0, 776]]], [[], [25, [0, 66]]]], // 792
[[[], [155, [0, 827], [0, 813]]]], // 793
[[[], [156, [0, 793], [0, 792]]]], // 794
[[[], [157, [0, 793]]]], // 795
[[[], [158, [0, 793], [0, 813]]]], // 796
[[[], [159, [0, 794]]]], // 797
[[[30, 59], [25, [0, 71]]], [[30, 60], [18, [0, 800], [0, 854]]], [[30, 61], [18, [0, 799], [0, 855]]], [[], [18, [0, 799], [0, 855]]]], // 798
[[[30, 61], [25, [0, 72]]], [[30, 59], [19, [0, 798], [0, 855]]], [[30, 60], [19, [0, 800], [0, 91]]], [[], [19, [0, 800], [0, 91]]]], // 799
[[[30, 60], [25, [0, 73]]], [[30, 59], [19, [0, 798], [0, 854]]], [[30, 61], [18, [0, 799], [0, 91]]], [[], [18, [0, 799], [0, 91]]]], // 800
[[[], [160, [0, 802], [0, 792]]]], // 801
[[[], [161, [0, 793], [0, 70]]]], // 802
[[[], [162, [0, 802], [0, 804]]]], // 803
[[[], [161, [0, 794], [0, 70]]]], // 804
[[[], [163, [0, 801], [0, 74]]]], // 805
[[[], [21, [0, 802], [0, 74]]]], // 806
[[[], [21, [0, 803], [0, 74]]]], // 807
[[[], [21, [0, 804], [0, 74]]]], // 808
[[[], [161, [0, 813], [0, 70]]]], // 809
[[[], [164, [0, 824], [0, 827], [0, 813]]]], // 810
[[[], [17, [0, 810]]]], // 811
[[[], [21, [0, 809], [0, 74]]]], // 812
[[[], [165, [0, 827], [0, 790]]]], // 813
[[[], [91, [0, 810], [0, 856], [0, 94]]]], // 814
[[[], [166, [0, 59], [0, 58], [0, 45], [0, 41], [0, 814]]]], // 815
[[[], [161, [0, 820], [0, 70]]]], // 816
[[[], [164, [0, 824], [0, 827], [0, 820]]]], // 817
[[[], [17, [0, 817]]]], // 818
[[[], [21, [0, 816], [0, 74]]]], // 819
[[[], [167, [0, 794]]]], // 820
[[[], [91, [0, 817], [0, 856], [0, 94]]]], // 821
[[[], [166, [0, 59], [0, 58], [0, 45], [0, 41], [0, 821]]]], // 822
[[[], [161, [0, 827], [0, 70]]]], // 823
[[[13, 58], [25, [0, 779]]], [[], [25, [0, 61]]]], // 824
[[[13, 58], [25, [0, 780]]], [[], [25, [0, 62]]]], // 825
[[[], [21, [0, 823], [0, 74]]]], // 826
[[[13, 58], [25, [0, 786]]], [[], [25, [0, 67]]]], // 827
[[[], [91, [0, 824], [0, 856], [0, 94]]]], // 828
[[[], [166, [0, 59], [0, 58], [0, 45], [0, 41], [0, 828]]]], // 829
[[[], [161, [0, 834], [0, 70]]]], // 830
[[[], [164, [0, 824], [0, 827], [0, 834]]]], // 831
[[[], [17, [0, 831]]]], // 832
[[[], [21, [0, 830], [0, 74]]]], // 833
[[[], [168, [0, 798], [0, 795], [0, 796], [0, 797]]]], // 834
[[[], [91, [0, 831], [0, 856], [0, 94]]]], // 835
[[[], [166, [0, 59], [0, 58], [0, 45], [0, 41], [0, 835]]]], // 836
[[[], [161, [0, 841], [0, 70]]]], // 837
[[[], [164, [0, 824], [0, 827], [0, 848]]]], // 838
[[[], [17, [0, 838]]]], // 839
[[[], [21, [0, 837], [0, 74]]]], // 840
[[[], [25, [0, 848]]]], // 841
[[[], [91, [0, 838], [0, 856], [0, 94]]]], // 842
[[[], [166, [0, 59], [0, 58], [0, 45], [0, 41], [0, 842]]]], // 843
[[[], [161, [0, 848], [0, 70]]]], // 844
[[[], [164, [0, 824], [0, 827], [0, 853]]]], // 845
[[[], [17, [0, 845]]]], // 846
[[[], [21, [0, 844], [0, 74]]]], // 847
[[[], [169, [0, 798], [0, 827], [0, 790]]]], // 848
[[[], [91, [0, 845], [0, 856], [0, 94]]]], // 849
[[[], [166, [0, 59], [0, 58], [0, 45], [0, 41], [0, 849]]]], // 850
[[[], [170, [0, 798], [0, 795], [0, 796], [0, 797]]]], // 851
[[[], [171, [0, 851], [0, 795], [0, 797]]]], // 852
[[[], [168, [0, 852], [0, 795], [0, 796], [0, 797]]]], // 853
[[[13, 58], [25, [0, 774]]], [[], [25, [0, 63]]]], // 854
[[[], [19, [0, 91], [0, 854]]]], // 855
[[[13, 58], [25, [0, 777]]], [[], [25, [0, 102]]]], // 856
[[[], [2]]], // 857
[[[], [2]]], // 858
[[[], [2]]], // 859
[[[], [172, [0, 861], [0, 56]]]], // 860
[[[], [173, [0, 866]]]], // 861
[[[], [9, [1, 13]]]], // 862
[[[], [174, [0, 861], [0, 860], [0, 101]]]], // 863
[[[], [175, [0, 863], [0, 862]]]], // 864
[[[], [176, [0, 864], [0, 857], [0, 858], [0, 859]]]], // 865
[[[], [2]]], // 866
[[[], [9, [1, 13]]]], // 867
[[[], [177, [0, 874]]]], // 868
[[[], [178, [0, 874]]]], // 869
[[[], [179, [0, 874]]]], // 870
[[[], [180, [0, 874]]]], // 871
[[[], [176, [0, 871], [0, 857], [0, 858], [0, 859]]]], // 872
[[[11, 62], [25, [0, 1180]]], [[], [181, [0, 69]]]], // 873
[[[], [182, [0, 45], [0, 101], [0, 873]]]], // 874
[[[], [172, [0, 877], [0, 56]]]], // 875
[[[15, 58], [25, [0, 779]]], [[], [25, [0, 61]]]], // 876
[[[], [183, [0, 876], [0, 101]]]], // 877
[[[], [184, [0, 877], [0, 101]]]], // 878
[[[], [174, [0, 877], [0, 875], [0, 101]]]], // 879
[[[], [175, [0, 879], [0, 878]]]], // 880
[[[], [176, [0, 880], [0, 857], [0, 858], [0, 859]]]], // 881
[[[], [172, [0, 883], [0, 56]]]], // 882
[[[], [185, [0, 889], [0, 892], [0, 893]]]], // 883
[[[], [9, [1, 13]]]], // 884
[[[], [174, [0, 883], [0, 882], [0, 101]]]], // 885
[[[], [175, [0, 885], [0, 884]]]], // 886
[[[], [176, [0, 886], [0, 857], [0, 858], [0, 859]]]], // 887
[[[], [2]]], // 888
[[[], [2]]], // 889
[[[], [2]]], // 890
[[[], [2]]], // 891
[[[], [186, [0, 888], [0, 890], [0, 891]]]], // 892
[[[], [187, [0, 888], [0, 890], [0, 891]]]], // 893
[[[14, 63], [91, [0, 61], [0, 102], [0, 94]]], [[], [25, [0, 783]]]], // 894
[[[16, 63], [25, [0, 68]]], [[], [25, [0, 894]]]], // 895
[[[], [166, [0, 59], [0, 58], [0, 45], [0, 41], [0, 895]]]], // 896
[[[], [188, [0, 45], [0, 41], [0, 895]]]], // 897
[[[], [189, [0, 45], [0, 41], [0, 895]]]], // 898
[[[], [9, [1, 17]]]], // 899
[[[], [9, [1, 0]]]], // 900
[[[], [9, [1, 64]]]], // 901
[[[], [25, [0, 83]]]], // 902
[[[], [9, [1, 34]]]], // 903
[[[], [9, [1, 23]]]], // 904
[[[], [9, [1, 25]]]], // 905
[[[], [9, [1, 17]]]], // 906
[[[], [9, [1, 0]]]], // 907
[[[], [9, [1, 65]]]], // 908
[[[], [25, [0, 84]]]], // 909
[[[], [9, [1, 29]]]], // 910
[[[], [9, [1, 23]]]], // 911
[[[], [9, [1, 25]]]], // 912
[[[], [9, [1, 17]]]], // 913
[[[], [9, [1, 0]]]], // 914
[[[], [9, [1, 66]]]], // 915
[[[], [25, [0, 85]]]], // 916
[[[], [9, [1, 19]]]], // 917
[[[], [9, [1, 23]]]], // 918
[[[], [9, [1, 25]]]], // 919
[[[], [9, [1, 17]]]], // 920
[[[], [9, [1, 0]]]], // 921
[[[], [9, [1, 13]]]], // 922
[[[], [25, [0, 83]]]], // 923
[[[], [9, [1, 67]]]], // 924
[[[], [9, [1, 23]]]], // 925
[[[], [9, [1, 25]]]], // 926
[[[], [9, [1, 17]]]], // 927
[[[], [9, [1, 0]]]], // 928
[[[], [9, [1, 13]]]], // 929
[[[], [9, [1, 32]]]], // 930
[[[], [9, [1, 8]]]], // 931
[[[], [9, [1, 23]]]], // 932
[[[], [9, [1, 25]]]], // 933
[[[], [9, [1, 17]]]], // 934
[[[], [9, [1, 0]]]], // 935
[[[], [9, [1, 13]]]], // 936
[[[], [25, [0, 87]]]], // 937
[[[], [9, [1, 67]]]], // 938
[[[], [9, [1, 23]]]], // 939
[[[], [9, [1, 25]]]], // 940
[[[], [9, [1, 17]]]], // 941
[[[], [9, [1, 0]]]], // 942
[[[], [9, [1, 65]]]], // 943
[[[], [25, [0, 88]]]], // 944
[[[], [9, [1, 67]]]], // 945
[[[], [9, [1, 23]]]], // 946
[[[], [9, [1, 25]]]], // 947
[[[], [9, [1, 17]]]], // 948
[[[], [9, [1, 0]]]], // 949
[[[], [9, [1, 13]]]], // 950
[[[], [9, [1, 32]]]], // 951
[[[], [9, [1, 8]]]], // 952
[[[], [9, [1, 23]]]], // 953
[[[], [9, [1, 25]]]], // 954
[[[], [9, [1, 17]]]], // 955
[[[], [9, [1, 0]]]], // 956
[[[], [9, [1, 13]]]], // 957
[[[], [9, [1, 32]]]], // 958
[[[], [9, [1, 8]]]], // 959
[[[], [9, [1, 23]]]], // 960
[[[], [9, [1, 25]]]], // 961
[[[], [9, [1, 17]]]], // 962
[[[], [9, [1, 0]]]], // 963
[[[], [9, [1, 13]]]], // 964
[[[], [9, [1, 32]]]], // 965
[[[], [9, [1, 8]]]], // 966
[[[], [9, [1, 23]]]], // 967
[[[], [9, [1, 25]]]], // 968
[[[], [35, [0, 903]]]], // 969
[[[], [36, [0, 903], [0, 901], [1, 28]]]], // 970
[[[], [37, [0, 902], [0, 969]]]], // 971
[[[], [38, [0, 901], [0, 905]]]], // 972
[[[], [39, [0, 903]]]], // 973
[[[], [40, [0, 973], [0, 1080]]]], // 974
[[[], [41, [0, 901], [0, 903], [0, 899]]]], // 975
[[[], [42, [0, 975], [0, 1064]]]], // 976
[[[], [43, [0, 901], [0, 899]]]], // 977
[[[], [44, [0, 970], [0, 902]]]], // 978
[[[], [35, [0, 910]]]], // 979
[[[], [36, [0, 910], [0, 908], [1, 28]]]], // 980
[[[], [37, [0, 909], [0, 979]]]], // 981
[[[], [38, [0, 908], [0, 912]]]], // 982
[[[], [39, [0, 910]]]], // 983
[[[], [40, [0, 983], [0, 1080]]]], // 984
[[[], [41, [0, 908], [0, 910], [0, 906]]]], // 985
[[[], [42, [0, 985], [0, 1064]]]], // 986
[[[], [43, [0, 908], [0, 906]]]], // 987
[[[], [44, [0, 980], [0, 909]]]], // 988
[[[], [35, [0, 917]]]], // 989
[[[], [36, [0, 917], [0, 915], [1, 28]]]], // 990
[[[], [37, [0, 916], [0, 989]]]], // 991
[[[], [38, [0, 915], [0, 919]]]], // 992
[[[], [39, [0, 917]]]], // 993
[[[], [40, [0, 993], [0, 1080]]]], // 994
[[[], [41, [0, 915], [0, 917], [0, 913]]]], // 995
[[[], [42, [0, 995], [0, 1064]]]], // 996
[[[], [43, [0, 915], [0, 913]]]], // 997
[[[], [44, [0, 990], [0, 916]]]], // 998
[[[], [35, [0, 924]]]], // 999
[[[], [36, [0, 924], [0, 922], [1, 28]]]], // 1000
[[[], [37, [0, 923], [0, 999]]]], // 1001
[[[], [38, [0, 922], [0, 926]]]], // 1002
[[[], [39, [0, 924]]]], // 1003
[[[], [40, [0, 1003], [0, 1080]]]], // 1004
[[[], [41, [0, 922], [0, 924], [0, 920]]]], // 1005
[[[], [42, [0, 1005], [0, 1064]]]], // 1006
[[[], [43, [0, 922], [0, 920]]]], // 1007
[[[], [44, [0, 1000], [0, 923]]]], // 1008
[[[], [35, [0, 931]]]], // 1009
[[[], [36, [0, 931], [0, 929], [1, 28]]]], // 1010
[[[], [37, [0, 930], [0, 1009]]]], // 1011
[[[], [38, [0, 929], [0, 933]]]], // 1012
[[[], [39, [0, 931]]]], // 1013
[[[], [40, [0, 1013], [0, 1080]]]], // 1014
[[[], [41, [0, 929], [0, 931], [0, 927]]]], // 1015
[[[], [42, [0, 1015], [0, 1064]]]], // 1016
[[[], [43, [0, 929], [0, 927]]]], // 1017
[[[], [44, [0, 1010], [0, 930]]]], // 1018
[[[], [35, [0, 938]]]], // 1019
[[[], [36, [0, 938], [0, 936], [1, 38]]]], // 1020
[[[], [37, [0, 937], [0, 1019]]]], // 1021
[[[], [38, [0, 936], [0, 940]]]], // 1022
[[[], [39, [0, 938]]]], // 1023
[[[], [40, [0, 1023], [0, 1100]]]], // 1024
[[[], [41, [0, 936], [0, 938], [0, 934]]]], // 1025
[[[], [42, [0, 1025], [0, 1084]]]], // 1026
[[[], [43, [0, 936], [0, 934]]]], // 1027
[[[], [35, [0, 945]]]], // 1028
[[[], [36, [0, 945], [0, 943], [1, 38]]]], // 1029
[[[], [37, [0, 944], [0, 1028]]]], // 1030
[[[], [38, [0, 943], [0, 947]]]], // 1031
[[[], [39, [0, 945]]]], // 1032
[[[], [40, [0, 1032], [0, 1100]]]], // 1033
[[[], [41, [0, 943], [0, 945], [0, 941]]]], // 1034
[[[], [42, [0, 1034], [0, 1084]]]], // 1035
[[[], [43, [0, 943], [0, 941]]]], // 1036
[[[], [35, [0, 952]]]], // 1037
[[[], [36, [0, 952], [0, 950], [1, 38]]]], // 1038
[[[], [37, [0, 951], [0, 1037]]]], // 1039
[[[], [38, [0, 950], [0, 954]]]], // 1040
[[[], [39, [0, 952]]]], // 1041
[[[], [40, [0, 1041], [0, 1100]]]], // 1042
[[[], [41, [0, 950], [0, 952], [0, 948]]]], // 1043
[[[], [42, [0, 1043], [0, 1084]]]], // 1044
[[[], [43, [0, 950], [0, 948]]]], // 1045
[[[], [35, [0, 959]]]], // 1046
[[[], [36, [0, 959], [0, 957], [1, 38]]]], // 1047
[[[], [37, [0, 958], [0, 1046]]]], // 1048
[[[], [38, [0, 957], [0, 961]]]], // 1049
[[[], [39, [0, 959]]]], // 1050
[[[], [40, [0, 1050], [0, 1100]]]], // 1051
[[[], [41, [0, 957], [0, 959], [0, 955]]]], // 1052
[[[], [42, [0, 1052], [0, 1084]]]], // 1053
[[[], [43, [0, 957], [0, 955]]]], // 1054
[[[], [35, [0, 966]]]], // 1055
[[[], [36, [0, 966], [0, 964], [1, 38]]]], // 1056
[[[], [37, [0, 965], [0, 1055]]]], // 1057
[[[], [38, [0, 964], [0, 968]]]], // 1058
[[[], [39, [0, 966]]]], // 1059
[[[], [40, [0, 1059], [0, 1100]]]], // 1060
[[[], [41, [0, 964], [0, 966], [0, 962]]]], // 1061
[[[], [42, [0, 1061], [0, 1084]]]], // 1062
[[[], [43, [0, 964], [0, 962]]]], // 1063
[[[], [45, [0, 975], [0, 985], [0, 995], [0, 1005], [0, 1015]]]], // 1064
[[[], [21, [0, 1064], [0, 1119]]]], // 1065
[[[], [46, [0, 1079]]]], // 1066
[[[], [47, [0, 1073], [0, 1071]]]], // 1067
[[[], [48, [0, 976], [0, 986], [0, 996], [0, 1006], [0, 1016], [0, 900], [0, 907], [0, 914], [0, 921], [0, 928]]]], // 1068
[[[], [45, [0, 901], [0, 908], [0, 915], [0, 922], [0, 929]]]], // 1069
[[[], [45, [0, 970], [0, 980], [0, 990], [0, 1000], [0, 1010]]]], // 1070
[[[], [9, [1, 44]]]], // 1071
[[[], [49, [0, 1070], [0, 1090]]]], // 1072
[[[], [48, [0, 976], [0, 986], [0, 996], [0, 1006], [0, 1016], [0, 902], [0, 909], [0, 916], [0, 923], [0, 930]]]], // 1073
[[[], [45, [0, 977], [0, 987], [0, 997], [0, 1007], [0, 1017]]]], // 1074
[[[], [48, [0, 976], [0, 986], [0, 996], [0, 1006], [0, 1016], [0, 971], [0, 981], [0, 991], [0, 1001], [0, 1011]]]], // 1075
[[[], [22, [0, 1077], [0, 1067]]]], // 1076
[[[], [50, [0, 1116], [0, 1081], [0, 1068], [0, 1066]]]], // 1077
[[[], [48, [0, 976], [0, 986], [0, 996], [0, 1006], [0, 1016], [0, 903], [0, 910], [0, 917], [0, 924], [0, 931]]]], // 1078
[[[], [48, [0, 976], [0, 986], [0, 996], [0, 1006], [0, 1016], [0, 904], [0, 911], [0, 918], [0, 925], [0, 932]]]], // 1079
[[[], [51, [0, 975], [0, 973], [0, 985], [0, 983], [0, 995], [0, 993], [0, 1005], [0, 1003], [0, 1015], [0, 1013]]]], // 1080
[[[], [48, [0, 974], [0, 984], [0, 994], [0, 1004], [0, 1014], [0, 972], [0, 982], [0, 992], [0, 1002], [0, 1012]]]], // 1081
[[[], [45, [0, 978], [0, 988], [0, 998], [0, 1008], [0, 1018]]]], // 1082
[[[], [21, [0, 1082], [0, 1070]]]], // 1083
[[[], [45, [0, 1025], [0, 1034], [0, 1043], [0, 1052], [0, 1061]]]], // 1084
[[[], [21, [0, 1084], [0, 1119]]]], // 1085
[[[], [46, [0, 1099]]]], // 1086
[[[], [47, [0, 1093], [0, 1091]]]], // 1087
[[[], [48, [0, 1026], [0, 1035], [0, 1044], [0, 1053], [0, 1062], [0, 935], [0, 942], [0, 949], [0, 956], [0, 963]]]], // 1088
[[[], [45, [0, 936], [0, 943], [0, 950], [0, 957], [0, 964]]]], // 1089
[[[], [45, [0, 1020], [0, 1029], [0, 1038], [0, 1047], [0, 1056]]]], // 1090
[[[], [52, [0, 1092], [0, 1083], [0, 1071]]]], // 1091
[[[], [49, [0, 1070], [0, 1090]]]], // 1092
[[[], [48, [0, 1026], [0, 1035], [0, 1044], [0, 1053], [0, 1062], [0, 937], [0, 944], [0, 951], [0, 958], [0, 965]]]], // 1093
[[[], [45, [0, 1027], [0, 1036], [0, 1045], [0, 1054], [0, 1063]]]], // 1094
[[[], [48, [0, 1026], [0, 1035], [0, 1044], [0, 1053], [0, 1062], [0, 1021], [0, 1030], [0, 1039], [0, 1048], [0, 1057]]]], // 1095
[[[], [22, [0, 1097], [0, 1087]]]], // 1096
[[[], [50, [0, 1116], [0, 1101], [0, 1088], [0, 1086]]]], // 1097
[[[], [48, [0, 1026], [0, 1035], [0, 1044], [0, 1053], [0, 1062], [0, 938], [0, 945], [0, 952], [0, 959], [0, 966]]]], // 1098
[[[], [48, [0, 1026], [0, 1035], [0, 1044], [0, 1053], [0, 1062], [0, 939], [0, 946], [0, 953], [0, 960], [0, 967]]]], // 1099
[[[], [51, [0, 1025], [0, 1023], [0, 1034], [0, 1032], [0, 1043], [0, 1041], [0, 1052], [0, 1050], [0, 1061], [0, 1059]]]], // 1100
[[[], [48, [0, 1024], [0, 1033], [0, 1042], [0, 1051], [0, 1060], [0, 1022], [0, 1031], [0, 1040], [0, 1049], [0, 1058]]]], // 1101
[[[], [9, [1, 8]]]], // 1102
[[[], [21, [0, 1107], [0, 1102]]]], // 1103
[[[], [48, [0, 1065], [0, 1085], [0, 1075], [0, 1095]]]], // 1104
[[[], [53, [0, 1104], [0, 1103]]]], // 1105
[[[], [54, [0, 1113], [0, 1112], [0, 1105]]]], // 1106
[[[], [45, [0, 1069], [0, 1089]]]], // 1107
[[[], [55, [0, 1102]]]], // 1108
[[[], [56, [0, 1074], [0, 1094], [0, 1102]]]], // 1109
[[[], [57, [0, 1117]]]], // 1110
[[[], [21, [0, 1109], [0, 1110]]]], // 1111
[[[], [58, [0, 1117], [0, 1109]]]], // 1112
[[[], [45, [0, 1076], [0, 1096]]]], // 1113
[[[], [59, [0, 1117]]]], // 1114
[[[], [60, [0, 1118]]]], // 1115
[[[], [61, [0, 1111], [0, 1115], [0, 1114]]]], // 1116
[[[], [48, [0, 1065], [0, 1085], [0, 1078], [0, 1098]]]], // 1117
[[[], [62, [0, 1117]]]], // 1118
[[[], [45, [0, 1064], [0, 1084]]]], // 1119
[[[], [63, [0, 1169], [0, 1133]]]], // 1120
[[[], [64, [0, 1169], [0, 1156]]]], // 1121
[[[], [9, [1, 13]]]], // 1122
[[[], [65, [0, 1121], [0, 1120], [0, 1122]]]], // 1123
[[[], [66, [0, 1121], [0, 1122]]]], // 1124
[[[], [67, [0, 1123], [0, 1124]]]], // 1125
[[[], [68, [0, 1137], [0, 1128]]]], // 1126
[[[], [68, [0, 1139], [0, 1145]]]], // 1127
[[[], [69, [0, 1166]]]], // 1128
[[[], [70, [0, 1128], [0, 1151], [0, 1154]]]], // 1129
[[[], [71, [0, 1169], [0, 1129]]]], // 1130
[[[], [9, [1, 13]]]], // 1131
[[[], [72, [0, 1109]]]], // 1132
[[[], [73, [0, 1131], [0, 1132]]]], // 1133
[[[], [74, [0, 1135], [0, 1151], [0, 1155]]]], // 1134
[[[], [75, [0, 1156], [0, 1133]]]], // 1135
[[[], [71, [0, 1169], [0, 1135]]]], // 1136
[[[], [74, [0, 1138], [0, 1151], [0, 1155]]]], // 1137
[[[], [76, [0, 1169], [0, 1139]]]], // 1138
[[[], [77, [0, 1169], [0, 1125]]]], // 1139
[[[], [78, [0, 1137], [0, 1128]]]], // 1140
[[[], [78, [0, 1138], [0, 1129]]]], // 1141
[[[], [78, [0, 1139], [0, 1130]]]], // 1142
[[[], [74, [0, 1144], [0, 1151], [0, 1155]]]], // 1143
[[[], [76, [0, 1169], [0, 1145]]]], // 1144
[[[], [79, [0, 1139], [0, 1137]]]], // 1145
[[[], [74, [0, 1147], [0, 1151], [0, 1155]]]], // 1146
[[[], [76, [0, 1169], [0, 1148]]]], // 1147
[[[], [79, [0, 1142], [0, 1140]]]], // 1148
[[[], [9, [1, 43]]]], // 1149
[[[25, 16], [25, [0, 102]]], [[], [33, [0, 101], [0, 1149]]]], // 1150
[[[], [81, [0, 1117]]]], // 1151
[[[], [82, [0, 1117]]]], // 1152
[[[], [83, [0, 1117]]]], // 1153
[[[], [84, [0, 1111], [0, 1153], [0, 1152]]]], // 1154
[[[], [85, [0, 1111], [0, 1153], [0, 1152]]]], // 1155
[[[], [86, [0, 1150], [0, 1151], [0, 1154]]]], // 1156
[[[28, 46], [25, [0, 1146]]], [[], [25, [0, 1143]]]], // 1157
[[[], [87, [0, 1168], [0, 1166], [0, 1160]]]], // 1158
[[[], [17, [0, 1158]]]], // 1159
[[[], [88, [0, 1117]]]], // 1160
[[[], [89, [0, 1123], [0, 1124], [0, 1125]]]], // 1161
[[[], [19, [0, 91], [0, 1161]]]], // 1162
[[[], [90, [0, 1166], [0, 1160]]]], // 1163
[[[], [20, [0, 1157]]]], // 1164
[[[28, 46], [25, [0, 1147]]], [[], [25, [0, 1144]]]], // 1165
[[[], [25, [0, 1113]]]], // 1166
[[[], [91, [0, 1158], [0, 1150], [0, 94]]]], // 1167
[[[28, 46], [25, [0, 1148]]], [[], [25, [0, 1145]]]], // 1168
[[[], [25, [0, 1106]]]], // 1169
[[[], [190, [0, 1171], [0, 1178]]]], // 1170
[[[], [161, [0, 1179], [0, 70]]]], // 1171
[[[], [191, [0, 1171], [0, 1178]]]], // 1172
[[[], [21, [0, 1171], [0, 1178]]]], // 1173
[[[], [163, [0, 1170], [0, 74]]]], // 1174
[[[], [21, [0, 1171], [0, 74]]]], // 1175
[[[], [21, [0, 1172], [0, 74]]]], // 1176
[[[], [21, [0, 1173], [0, 74]]]], // 1177
[[[], [192, [0, 101]]]], // 1178
[[[], [193, [0, 1168]]]], // 1179
[[[], [194, [0, 1182], [0, 1179]]]], // 1180
[[[], [195, [0, 1180]]]], // 1181
[[[], [196, [0, 46], [0, 1218]]]], // 1182
[[[], [197, [0, 1180]]]], // 1183
[[[], [198, [0, 101], [0, 1179]]]], // 1184
[[[], [21, [0, 1183], [0, 1184]]]], // 1185
[[[], [199, [0, 1185]]]], // 1186
[[[], [200, [0, 1185]]]], // 1187
[[[], [190, [0, 1189], [0, 1178]]]], // 1188
[[[], [161, [0, 1198], [0, 70]]]], // 1189
[[[], [191, [0, 1189], [0, 1178]]]], // 1190
[[[], [21, [0, 1189], [0, 1178]]]], // 1191
[[[], [163, [0, 1188], [0, 74]]]], // 1192
[[[], [21, [0, 1189], [0, 74]]]], // 1193
[[[], [21, [0, 1190], [0, 74]]]], // 1194
[[[], [21, [0, 1191], [0, 74]]]], // 1195
[[[], [201, [0, 1214], [0, 311], [0, 354], [0, 356], [0, 359], [0, 338]]]], // 1196
[[[], [202, [0, 373], [0, 1203], [0, 1196]]]], // 1197
[[[], [203, [0, 373], [0, 1179], [0, 1197]]]], // 1198
[[[], [204, [0, 1198], [0, 1197], [0, 46], [0, 1218]]]], // 1199
[[[], [195, [0, 1199]]]], // 1200
[[[], [205, [0, 48], [0, 41]]]], // 1201
[[[], [17, [0, 1201]]]], // 1202
[[[], [206, [0, 1201], [0, 1218]]]], // 1203
[[[], [207, [0, 47]]]], // 1204
[[[], [208, [0, 1216], [0, 1201]]]], // 1205
[[[], [209, [0, 1205]]]], // 1206
[[[], [210, [0, 1179], [0, 1204]]]], // 1207
[[[], [211, [0, 1205], [0, 1207]]]], // 1208
[[[], [212, [0, 1205], [0, 1207]]]], // 1209
[[[], [213, [0, 1205], [0, 1207]]]], // 1210
[[[], [214, [0, 1205], [0, 1207]]]], // 1211
[[[], [215, [0, 1205], [0, 1207]]]], // 1212
[[[], [216, [0, 1205], [0, 1207]]]], // 1213
[[[], [217, [0, 47], [0, 1166], [0, 1105], [0, 1133]]]], // 1214
[[[], [218, [0, 1214]]]], // 1215
[[[10, 58], [25, [0, 779]]], [[], [25, [0, 61]]]], // 1216
[[[10, 58], [25, [0, 780]]], [[], [25, [0, 62]]]], // 1217
[[[10, 58], [25, [0, 781]]], [[], [25, [0, 65]]]] // 1218
] // Array of Node Variant class indices

const variant = [0, // 0
0, // 1
0, // 2
0, // 3
0, // 4
0, // 5
0, // 6
0, // 7
0, // 8
0, // 9
1, // 10
2, // 11
3, // 12
1, // 13
1, // 14
1, // 15
4, // 16
5, // 17
6, // 18
7, // 19
8, // 20
9, // 21
10, // 22
11, // 23
12, // 24
13, // 25
14, // 26
15, // 27
16, // 28
17, // 29
18, // 30
19, // 31
19, // 32
19, // 33
19, // 34
20, // 35
21, // 36
22, // 37
23, // 38
20, // 39
24, // 40
25, // 41
26, // 42
25, // 43
27, // 44
25, // 45
28, // 46
29, // 47
30, // 48
31, // 49
32, // 50
33, // 51
24, // 52
34, // 53
25, // 54
32, // 55
25, // 56
35, // 57
36, // 58
37, // 59
38, // 60
39, // 61
40, // 62
41, // 63
41, // 64
28, // 65
42, // 66
43, // 67
44, // 68
40, // 69
45, // 70
41, // 71
41, // 72
41, // 73
46, // 74
47, // 75
48, // 76
49, // 77
48, // 78
48, // 79
48, // 80
50, // 81
50, // 82
30, // 83
30, // 84
30, // 85
30, // 86
30, // 87
30, // 88
30, // 89
41, // 90
41, // 91
50, // 92
50, // 93
51, // 94
51, // 95
41, // 96
41, // 97
41, // 98
41, // 99
38, // 100
38, // 101
38, // 102
34, // 103
52, // 104
31, // 105
33, // 106
30, // 107
53, // 108
54, // 109
55, // 110
56, // 111
33, // 112
57, // 113
33, // 114
58, // 115
59, // 116
60, // 117
59, // 118
61, // 119
33, // 120
52, // 121
31, // 122
33, // 123
30, // 124
53, // 125
54, // 126
55, // 127
56, // 128
33, // 129
57, // 130
33, // 131
58, // 132
59, // 133
60, // 134
59, // 135
61, // 136
33, // 137
52, // 138
31, // 139
33, // 140
30, // 141
53, // 142
54, // 143
55, // 144
56, // 145
33, // 146
57, // 147
33, // 148
58, // 149
59, // 150
60, // 151
59, // 152
61, // 153
33, // 154
52, // 155
31, // 156
33, // 157
30, // 158
53, // 159
54, // 160
55, // 161
56, // 162
33, // 163
57, // 164
33, // 165
58, // 166
59, // 167
60, // 168
59, // 169
61, // 170
33, // 171
52, // 172
31, // 173
33, // 174
30, // 175
53, // 176
54, // 177
55, // 178
56, // 179
33, // 180
57, // 181
33, // 182
58, // 183
59, // 184
60, // 185
59, // 186
61, // 187
33, // 188
52, // 189
31, // 190
33, // 191
30, // 192
53, // 193
54, // 194
55, // 195
56, // 196
33, // 197
57, // 198
33, // 199
58, // 200
59, // 201
60, // 202
59, // 203
61, // 204
52, // 205
31, // 206
33, // 207
30, // 208
53, // 209
54, // 210
55, // 211
56, // 212
33, // 213
57, // 214
33, // 215
58, // 216
59, // 217
60, // 218
59, // 219
61, // 220
52, // 221
31, // 222
33, // 223
30, // 224
53, // 225
54, // 226
55, // 227
56, // 228
33, // 229
57, // 230
33, // 231
58, // 232
59, // 233
60, // 234
59, // 235
61, // 236
52, // 237
31, // 238
33, // 239
30, // 240
53, // 241
54, // 242
55, // 243
56, // 244
33, // 245
57, // 246
33, // 247
58, // 248
59, // 249
60, // 250
59, // 251
61, // 252
52, // 253
31, // 254
33, // 255
30, // 256
53, // 257
54, // 258
55, // 259
56, // 260
33, // 261
57, // 262
33, // 263
58, // 264
59, // 265
60, // 266
59, // 267
61, // 268
60, // 269
59, // 270
62, // 271
62, // 272
31, // 273
33, // 274
33, // 275
30, // 276
63, // 277
30, // 278
64, // 279
57, // 280
65, // 281
65, // 282
53, // 283
54, // 284
59, // 285
33, // 286
33, // 287
30, // 288
60, // 289
59, // 290
62, // 291
62, // 292
31, // 293
33, // 294
33, // 295
30, // 296
63, // 297
30, // 298
64, // 299
57, // 300
65, // 301
65, // 302
53, // 303
54, // 304
59, // 305
33, // 306
64, // 307
29, // 308
66, // 309
67, // 310
43, // 311
33, // 312
34, // 313
68, // 314
68, // 315
68, // 316
69, // 317
65, // 318
63, // 319
70, // 320
70, // 321
53, // 322
63, // 323
60, // 324
43, // 325
43, // 326
41, // 327
63, // 328
63, // 329
43, // 330
32, // 331
32, // 332
38, // 333
63, // 334
43, // 335
50, // 336
63, // 337
63, // 338
38, // 339
63, // 340
43, // 341
38, // 342
63, // 343
43, // 344
38, // 345
63, // 346
43, // 347
38, // 348
63, // 349
43, // 350
38, // 351
63, // 352
43, // 353
34, // 354
38, // 355
63, // 356
63, // 357
63, // 358
63, // 359
63, // 360
63, // 361
38, // 362
39, // 363
40, // 364
71, // 365
41, // 366
41, // 367
28, // 368
42, // 369
63, // 370
65, // 371
44, // 372
43, // 373
43, // 374
72, // 375
73, // 376
72, // 377
74, // 378
64, // 379
30, // 380
33, // 381
33, // 382
33, // 383
33, // 384
33, // 385
53, // 386
53, // 387
53, // 388
31, // 389
31, // 390
33, // 391
33, // 392
72, // 393
75, // 394
74, // 395
64, // 396
33, // 397
33, // 398
76, // 399
77, // 400
77, // 401
64, // 402
33, // 403
33, // 404
33, // 405
33, // 406
33, // 407
33, // 408
33, // 409
33, // 410
33, // 411
33, // 412
33, // 413
33, // 414
72, // 415
76, // 416
78, // 417
24, // 418
64, // 419
64, // 420
33, // 421
33, // 422
33, // 423
33, // 424
33, // 425
33, // 426
33, // 427
72, // 428
79, // 429
74, // 430
64, // 431
33, // 432
33, // 433
33, // 434
33, // 435
33, // 436
33, // 437
52, // 438
31, // 439
33, // 440
30, // 441
53, // 442
54, // 443
55, // 444
56, // 445
33, // 446
57, // 447
33, // 448
58, // 449
59, // 450
60, // 451
59, // 452
61, // 453
33, // 454
52, // 455
31, // 456
33, // 457
30, // 458
53, // 459
54, // 460
55, // 461
56, // 462
33, // 463
57, // 464
33, // 465
58, // 466
59, // 467
60, // 468
59, // 469
61, // 470
33, // 471
52, // 472
31, // 473
33, // 474
30, // 475
53, // 476
54, // 477
55, // 478
56, // 479
33, // 480
57, // 481
33, // 482
58, // 483
59, // 484
60, // 485
59, // 486
61, // 487
33, // 488
52, // 489
31, // 490
33, // 491
30, // 492
53, // 493
54, // 494
55, // 495
56, // 496
33, // 497
57, // 498
33, // 499
58, // 500
59, // 501
60, // 502
59, // 503
61, // 504
33, // 505
52, // 506
31, // 507
33, // 508
30, // 509
53, // 510
54, // 511
55, // 512
56, // 513
33, // 514
57, // 515
33, // 516
58, // 517
59, // 518
60, // 519
59, // 520
61, // 521
33, // 522
52, // 523
31, // 524
33, // 525
30, // 526
53, // 527
54, // 528
55, // 529
56, // 530
33, // 531
57, // 532
33, // 533
58, // 534
59, // 535
60, // 536
59, // 537
61, // 538
52, // 539
31, // 540
33, // 541
30, // 542
53, // 543
54, // 544
55, // 545
56, // 546
33, // 547
57, // 548
33, // 549
58, // 550
59, // 551
60, // 552
59, // 553
61, // 554
52, // 555
31, // 556
33, // 557
30, // 558
53, // 559
54, // 560
55, // 561
56, // 562
33, // 563
57, // 564
33, // 565
58, // 566
59, // 567
60, // 568
59, // 569
61, // 570
52, // 571
31, // 572
33, // 573
30, // 574
53, // 575
54, // 576
55, // 577
56, // 578
33, // 579
57, // 580
33, // 581
58, // 582
59, // 583
60, // 584
59, // 585
61, // 586
52, // 587
31, // 588
33, // 589
30, // 590
53, // 591
54, // 592
55, // 593
56, // 594
33, // 595
57, // 596
33, // 597
58, // 598
59, // 599
60, // 600
59, // 601
61, // 602
60, // 603
59, // 604
62, // 605
62, // 606
31, // 607
33, // 608
33, // 609
30, // 610
63, // 611
30, // 612
64, // 613
57, // 614
65, // 615
65, // 616
53, // 617
54, // 618
59, // 619
33, // 620
33, // 621
30, // 622
60, // 623
59, // 624
62, // 625
62, // 626
31, // 627
33, // 628
33, // 629
30, // 630
63, // 631
30, // 632
64, // 633
57, // 634
65, // 635
65, // 636
53, // 637
54, // 638
59, // 639
33, // 640
64, // 641
29, // 642
66, // 643
67, // 644
43, // 645
33, // 646
34, // 647
68, // 648
68, // 649
68, // 650
69, // 651
65, // 652
63, // 653
70, // 654
70, // 655
53, // 656
63, // 657
60, // 658
43, // 659
43, // 660
41, // 661
63, // 662
63, // 663
43, // 664
32, // 665
32, // 666
38, // 667
63, // 668
43, // 669
50, // 670
63, // 671
63, // 672
38, // 673
63, // 674
43, // 675
38, // 676
63, // 677
43, // 678
38, // 679
63, // 680
43, // 681
38, // 682
63, // 683
43, // 684
38, // 685
63, // 686
43, // 687
34, // 688
38, // 689
63, // 690
63, // 691
63, // 692
63, // 693
63, // 694
63, // 695
38, // 696
39, // 697
40, // 698
71, // 699
41, // 700
41, // 701
28, // 702
42, // 703
63, // 704
65, // 705
44, // 706
43, // 707
43, // 708
72, // 709
73, // 710
72, // 711
74, // 712
64, // 713
30, // 714
33, // 715
33, // 716
33, // 717
33, // 718
33, // 719
53, // 720
53, // 721
53, // 722
31, // 723
31, // 724
33, // 725
33, // 726
72, // 727
75, // 728
74, // 729
64, // 730
33, // 731
33, // 732
76, // 733
77, // 734
77, // 735
64, // 736
33, // 737
33, // 738
33, // 739
33, // 740
33, // 741
33, // 742
33, // 743
33, // 744
33, // 745
33, // 746
33, // 747
33, // 748
72, // 749
76, // 750
78, // 751
24, // 752
64, // 753
64, // 754
33, // 755
33, // 756
33, // 757
33, // 758
33, // 759
33, // 760
33, // 761
72, // 762
79, // 763
74, // 764
64, // 765
33, // 766
33, // 767
33, // 768
33, // 769
33, // 770
33, // 771
24, // 772
38, // 773
41, // 774
41, // 775
42, // 776
38, // 777
34, // 778
39, // 779
40, // 780
28, // 781
65, // 782
44, // 783
32, // 784
38, // 785
43, // 786
43, // 787
43, // 788
43, // 789
42, // 790
38, // 791
42, // 792
43, // 793
43, // 794
43, // 795
43, // 796
43, // 797
41, // 798
41, // 799
41, // 800
80, // 801
48, // 802
48, // 803
48, // 804
81, // 805
82, // 806
82, // 807
82, // 808
48, // 809
39, // 810
40, // 811
82, // 812
43, // 813
44, // 814
77, // 815
48, // 816
39, // 817
40, // 818
82, // 819
43, // 820
44, // 821
77, // 822
48, // 823
39, // 824
40, // 825
82, // 826
43, // 827
44, // 828
77, // 829
48, // 830
39, // 831
40, // 832
82, // 833
43, // 834
44, // 835
77, // 836
48, // 837
39, // 838
40, // 839
82, // 840
43, // 841
44, // 842
77, // 843
48, // 844
39, // 845
40, // 846
82, // 847
43, // 848
44, // 849
77, // 850
41, // 851
41, // 852
43, // 853
41, // 854
41, // 855
38, // 856
83, // 857
84, // 858
48, // 859
25, // 860
25, // 861
84, // 862
84, // 863
84, // 864
84, // 865
40, // 866
25, // 867
25, // 868
84, // 869
84, // 870
84, // 871
84, // 872
39, // 873
85, // 874
25, // 875
39, // 876
25, // 877
84, // 878
84, // 879
84, // 880
84, // 881
25, // 882
25, // 883
84, // 884
84, // 885
84, // 886
84, // 887
86, // 888
25, // 889
36, // 890
87, // 891
40, // 892
88, // 893
44, // 894
44, // 895
77, // 896
77, // 897
77, // 898
52, // 899
31, // 900
33, // 901
30, // 902
53, // 903
54, // 904
55, // 905
52, // 906
31, // 907
33, // 908
30, // 909
53, // 910
54, // 911
55, // 912
52, // 913
31, // 914
33, // 915
30, // 916
53, // 917
54, // 918
55, // 919
52, // 920
31, // 921
33, // 922
30, // 923
53, // 924
54, // 925
55, // 926
52, // 927
31, // 928
33, // 929
30, // 930
53, // 931
54, // 932
55, // 933
52, // 934
31, // 935
33, // 936
30, // 937
53, // 938
54, // 939
55, // 940
52, // 941
31, // 942
33, // 943
30, // 944
53, // 945
54, // 946
55, // 947
52, // 948
31, // 949
33, // 950
30, // 951
53, // 952
54, // 953
55, // 954
52, // 955
31, // 956
33, // 957
30, // 958
53, // 959
54, // 960
55, // 961
52, // 962
31, // 963
33, // 964
30, // 965
53, // 966
54, // 967
55, // 968
56, // 969
33, // 970
57, // 971
33, // 972
58, // 973
59, // 974
60, // 975
59, // 976
61, // 977
33, // 978
56, // 979
33, // 980
57, // 981
33, // 982
58, // 983
59, // 984
60, // 985
59, // 986
61, // 987
33, // 988
56, // 989
33, // 990
57, // 991
33, // 992
58, // 993
59, // 994
60, // 995
59, // 996
61, // 997
33, // 998
56, // 999
33, // 1000
57, // 1001
33, // 1002
58, // 1003
59, // 1004
60, // 1005
59, // 1006
61, // 1007
33, // 1008
56, // 1009
33, // 1010
57, // 1011
33, // 1012
58, // 1013
59, // 1014
60, // 1015
59, // 1016
61, // 1017
33, // 1018
56, // 1019
33, // 1020
57, // 1021
33, // 1022
58, // 1023
59, // 1024
60, // 1025
59, // 1026
61, // 1027
56, // 1028
33, // 1029
57, // 1030
33, // 1031
58, // 1032
59, // 1033
60, // 1034
59, // 1035
61, // 1036
56, // 1037
33, // 1038
57, // 1039
33, // 1040
58, // 1041
59, // 1042
60, // 1043
59, // 1044
61, // 1045
56, // 1046
33, // 1047
57, // 1048
33, // 1049
58, // 1050
59, // 1051
60, // 1052
59, // 1053
61, // 1054
56, // 1055
33, // 1056
57, // 1057
33, // 1058
58, // 1059
59, // 1060
60, // 1061
59, // 1062
61, // 1063
60, // 1064
59, // 1065
62, // 1066
62, // 1067
31, // 1068
33, // 1069
33, // 1070
30, // 1071
63, // 1072
30, // 1073
64, // 1074
57, // 1075
65, // 1076
65, // 1077
53, // 1078
54, // 1079
59, // 1080
33, // 1081
33, // 1082
30, // 1083
60, // 1084
59, // 1085
62, // 1086
62, // 1087
31, // 1088
33, // 1089
33, // 1090
30, // 1091
63, // 1092
30, // 1093
64, // 1094
57, // 1095
65, // 1096
65, // 1097
53, // 1098
54, // 1099
59, // 1100
33, // 1101
64, // 1102
29, // 1103
66, // 1104
67, // 1105
43, // 1106
33, // 1107
34, // 1108
68, // 1109
68, // 1110
68, // 1111
69, // 1112
65, // 1113
63, // 1114
70, // 1115
70, // 1116
53, // 1117
63, // 1118
60, // 1119
43, // 1120
43, // 1121
41, // 1122
63, // 1123
63, // 1124
43, // 1125
32, // 1126
32, // 1127
38, // 1128
63, // 1129
43, // 1130
50, // 1131
63, // 1132
63, // 1133
38, // 1134
63, // 1135
43, // 1136
38, // 1137
63, // 1138
43, // 1139
38, // 1140
63, // 1141
43, // 1142
38, // 1143
63, // 1144
43, // 1145
38, // 1146
63, // 1147
43, // 1148
34, // 1149
38, // 1150
63, // 1151
63, // 1152
63, // 1153
63, // 1154
63, // 1155
63, // 1156
38, // 1157
39, // 1158
40, // 1159
71, // 1160
41, // 1161
41, // 1162
28, // 1163
42, // 1164
63, // 1165
65, // 1166
44, // 1167
43, // 1168
43, // 1169
80, // 1170
48, // 1171
48, // 1172
48, // 1173
81, // 1174
82, // 1175
82, // 1176
82, // 1177
42, // 1178
43, // 1179
39, // 1180
40, // 1181
28, // 1182
89, // 1183
89, // 1184
90, // 1185
32, // 1186
32, // 1187
80, // 1188
48, // 1189
48, // 1190
48, // 1191
81, // 1192
82, // 1193
82, // 1194
82, // 1195
43, // 1196
91, // 1197
43, // 1198
39, // 1199
39, // 1200
39, // 1201
40, // 1202
43, // 1203
43, // 1204
92, // 1205
32, // 1206
93, // 1207
94, // 1208
32, // 1209
32, // 1210
32, // 1211
32, // 1212
32, // 1213
38, // 1214
63, // 1215
39, // 1216
40, // 1217
28 // 1218
]

const Dna = /* #__PURE__ */Object.freeze({
  __proto__: null,
  literal: literal,
  dagMethod: dagMethod,
  method: method,
  variantClass: variantClass,
  map: map,
  key: key,
  updater: updater,
  variant: variant
})

const Bpx = /* #__PURE__ */(function (_Dag) {
  _inherits(Bpx, _Dag)

  const _super = _createSuper(Bpx)

  function Bpx () {
    _classCallCheck(this, Bpx)

    return _super.call(this, Dna)
  }

  return Bpx
}(Dag))

export { Blob, Bool, Bpx, Count, Dag, Float, Index, Integer, Numeric, Option, Quantity, Slope, Text, nodeLabel }
